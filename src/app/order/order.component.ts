import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakeproService } from '../services/cakepro.service';
import { Cakeobj } from '../model/cake';
import { LoginservicesService } from '../login-service/login.service';
import { UserservicesService } from '../user-service/user.service';

import { Order } from '../model/order';
import { OrderserviceService } from '../orderservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderpageComponent {
  myorderinfo: Order = {

  }

  constructor(private rs: ActivatedRoute, private snackbar: MatSnackBar, public orderserv: OrderserviceService, private cakeservs: CakeproService, private logserv: LoginservicesService, private userserv: UserservicesService) {

  }
  mycakes: Cakeobj = {}





  ngOnInit(): void {
    this.rs.paramMap.subscribe(params => {
      let cakeid = params.get("id") ?? 0;
      this.getOneCake(cakeid);
      this.myorderinfo.emailID = this.logserv.emailiD
      this.myorderinfo.catagories = this.mycakes.categories
      this.myorderinfo.price = this.mycakes.price

      this.myorderinfo.id = this.mycakes.id

    })
  }

  getOneCake(id: any) {
    this.cakeservs.getCakeobjById(id).subscribe((data) => {
      this.mycakes = data;
    })
  }
  addplaceorderdetails() {
    if (this.logserv.isUser) {
      this.myorderinfo.catagories = this.mycakes.categories
      this.myorderinfo.price = this.mycakes.price
      this.myorderinfo.imageurl = this.mycakes.imageurl
      this.orderserv.addplaceorderdetails(this.myorderinfo).subscribe(() => {
        this.snackbar.open('Order placed successfully', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });

      })
    }
    else {
      this.snackbar.open('Please Login to order', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });
    }
  }

}

