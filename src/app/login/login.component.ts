import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from '../user-service/user.service';
import { LoginservicesService } from '../login-service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  constructor(private fb: FormBuilder, private snackbar: MatSnackBar, private userserv: UserservicesService, private roter: Router, private logserv: LoginservicesService, public snackBar: MatSnackBar) {

  }
  userModel = this.fb.group({

    emailiD: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  get emailiD() {
    return this.userModel.get("emailiD");
  }
  get password() {
    return this.userModel.get('password');
  }
  visible: boolean = false;

  togglePasswordVisibility() {
    this.visible = !this.visible;
  }


  getUserEmailPass() {

    const emailiD = this.userModel.value.emailiD!;
    const password = this.userModel.value.password!;


    this.userserv.login(emailiD, password).subscribe(data => {

      if (data.length === 1) {

        this.logserv.loginPage(data)
        this.snackbar.open('Logged In Successfully', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });

        this.roter.navigateByUrl("")
      } else {
        this.snackbar.open('User not found, Register to Login', 'Close', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });

      }
    });

  }
  canclose() {
    if (this.userModel.invalid) {
      let response = confirm("Are You sure you want to leave this page?")
      return response;
    }
    else {
      return true;
    }
  }
}