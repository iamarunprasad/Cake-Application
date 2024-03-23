import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AddcakesComponent } from './cakes/cakes.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderpageComponent } from './order/order.component';
import { ViewComponent } from './view/view.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { cakeguardGuard } from './cakeguard.guard';
import { cakingguardGuard } from './cakingguard.guard';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "addcake",
    component: AddcakesComponent,
    canActivate: [cakeguardGuard]
  },
  {
    path: "viewallcakes",
    redirectTo: ""
  },
  {
    path: "editdetails/:id",
    component: AddcakesComponent,
    canActivate: [cakeguardGuard]
  },
  {
    path: "viewonecake/:id",
    component: ViewComponent
  },
  {
    path: "order/:id",
    component: OrderpageComponent,
    canDeactivate: [cakingguardGuard]
  },
  {
    path: "ordered",
    component: OrderdetailsComponent
  },
  {
    path: "ordersummary/:id",
    component: OrdersummaryComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
