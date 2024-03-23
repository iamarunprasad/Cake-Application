import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {
  isAdmin: boolean = false
  isUser: boolean = false
  username: string = ""
  emailiD: string = ""
  role: string = ""

  constructor(private router: Router) { }

  loginPage(data: any) {
    if (data[0].role == "user") {
      this.isUser = true;
    }
    else {
      this.isAdmin = true;

    }
    this.username = data[0].username
    this.emailiD = data[0].emailiD
    this.role = data[0].role
  }
  logoutpage() {
    this.isAdmin = false;
    this.isUser = false;
    this.emailiD = ""
    this.role = ""
    this.router.navigateByUrl("")
  }

}