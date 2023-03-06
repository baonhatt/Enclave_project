import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { Addproduct } from './addproduct/addproduct.component';
import { Manageproduct } from './manageproduct/manageproduct.component';
import { Deleteproduct } from './deleteproduct/deleteproduct.component';
import { Editproduct } from './editproduct/editproduct.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Chartprice } from './chart/chartprice/chartprice.component';
import {Managestaff} from './managestaff/managestaff.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    Addproduct,
    Deleteproduct,
    Editproduct,
    Manageproduct,
    Chartprice,
    Managestaff

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
