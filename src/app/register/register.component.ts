import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserservicesService } from '../user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private userserv: UserservicesService, private roter: Router) {

  }
  userModel = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-z ]*')]],
    emailiD: ['', [Validators.required, Validators.email]],
    phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    role: ['user'],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
    confirmpassword: ['', Validators.required],
    address: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]]

  }, { validators: this.passwordCheck })


  get username() {
    return this.userModel.get("username");
  }
  get role() {
    return this.userModel.get("role");
  }
  get emailiD() {
    return this.userModel.get("emailiD");
  }
  get phoneNo() {
    return this.userModel.get("phoneNo");
  }

  get pincode() {
    return this.userModel.get("pincode")
  }
  get address() {
    return this.userModel.get("address")
  }

  get password() {
    return this.userModel.get('password');
  }
  get confirmpassword() {
    return this.userModel.get('confirmpassword');
  }

  passwordCheck(ac: AbstractControl) {
    let pass = ac.get('password')?.value;
    let cpass = ac.get('confirmpassword')?.value;
    if (pass == cpass) {
      return null;
    }
    else {
      return { passerror: "incorrect password" }
    }
  }


  addUsers() {
    const emailid = this.userModel.value.emailiD!

    this.userserv.checkIfuserExist(emailid).subscribe((data) => {

      if (data.length !== 0) {
        alert("You Already Registered")
      }
      else {
        this.userserv.adduserdata(this.userModel.value).subscribe(() => {
          alert("You Registered Successfully")

        })

      }
    })
  }

  visible: boolean = false;

  togglePasswordVisibility() {
    this.visible = !this.visible;
  }

}