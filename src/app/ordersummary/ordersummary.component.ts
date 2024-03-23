import { Component } from '@angular/core';
import { Order } from '../model/order';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginservicesService } from '../login-service/login.service';
import { OrderserviceService } from '../orderservice.service';


@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrl: './ordersummary.component.css'
})
export class OrdersummaryComponent {

  mydetails: Order = {}

  constructor(private snackbar: MatSnackBar, private rs: ActivatedRoute, public logserv: LoginservicesService, private ordersev: OrderserviceService) { }

  ngOnInit(): void {
    this.rs.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOnedetails(cakeid);

    })
  }
  getOnedetails(id: any) {
    this.ordersev.getorderById(id).subscribe((data) => {
      this.mydetails = data
    })
  }
}