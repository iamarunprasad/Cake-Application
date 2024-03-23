import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private httpclient: HttpClient) { }
  addplaceorderdetails(orderdetails: any): Observable<any> {
    return this.httpclient.post<any>(" http://localhost:3000/orderDetails", orderdetails)

  }
  getallorderdetails() {
    return this.httpclient.get<Order[]>(" http://localhost:3000/orderDetails")
  }
  getorderById(id: number) {
    return this.httpclient.get<Order>(" http://localhost:3000/orderDetails/" + id);
  }
}




