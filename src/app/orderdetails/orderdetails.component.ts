import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderdetailsService } from '../orderdetails.service';


@Component({
  selector: 'app-customerorderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.css'
})
export class OrderdetailsComponent implements OnInit {
  customerorder: Order[] = []


  constructor(private orderserv: OrderdetailsService) { }
  ngOnInit(): void {
    this.getorderdata()

  }
  getorderdata() {
    return this.orderserv.getallorderdetails().subscribe(alldetails => {
      this.customerorder = alldetails
    })
  }
}