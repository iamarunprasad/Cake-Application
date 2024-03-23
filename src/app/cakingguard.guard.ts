import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs';

export class cakingguardGuard implements CanDeactivate<LoginComponent>{

  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canclose ? component.canclose() : true;
  }

};

