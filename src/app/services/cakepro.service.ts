import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cakeobj } from '../model/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeproService {

  constructor(private httpclient: HttpClient) {

  }
  editcakedetails(myCakedetails: Cakeobj) {
    return this.httpclient.put<Cakeobj>("http://localhost:3000/cake/" + myCakedetails.id, myCakedetails);
  }
  addcakedetails(myCakedetails: Cakeobj) {
    return this.httpclient.post<Cakeobj>("http://localhost:3000/cake/", myCakedetails);
  }

  deletecakedetails(id: number) {
    return this.httpclient.delete<Cakeobj>("http://localhost:3000/cake/" + id);
  }
  getCakeobj() {
    return this.httpclient.get<Cakeobj[]>("http://localhost:3000/cake/");
  }
  getCakeobjById(id: number) {
    return this.httpclient.get<Cakeobj>("http://localhost:3000/cake/" + id);

  }
  getByName(name: string) {
    return this.httpclient.get<Cakeobj[]>("http://localhost:3000/cake?categories=" + name)
  }

}


