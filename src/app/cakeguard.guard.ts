import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginservicesService } from './login-service/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cakeguardGuard implements CanActivate {
  constructor(private logserv: LoginservicesService, private roter: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.logserv.isAdmin) {
      return true
    }
    else {
      this.roter.navigateByUrl("login")
      return false
    }
  }
};



