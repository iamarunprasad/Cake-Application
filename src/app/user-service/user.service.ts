import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private httpclient: HttpClient) { }
  adduserdata(myuser: any) {
    return this.httpclient.post("http://localhost:3000/userModel", myuser)
  }
  login(emailiD: string, password: string) {
    return this.httpclient.get<string[]>("http://localhost:3000/userModel?emailiD=" + emailiD + "&password=" + password);
  }
  checkIfuserExist(emailiD: string) {
    return this.httpclient.get<string[]>("http://localhost:3000/userModel?emailiD=" + emailiD)
  }

  role(role: string) {
    return this.httpclient.get<string>("http://localhost:3000/userModel?role=" + role)
  }

}