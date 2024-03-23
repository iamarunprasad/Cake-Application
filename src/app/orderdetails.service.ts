import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './model/order';
@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private httpclient: HttpClient) {
  }
  getallorderdetails() {
    return this.httpclient.get<Order[]>("http://localhost:3000/orderDetails")
  }
}