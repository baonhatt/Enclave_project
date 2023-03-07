import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';

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
import { ListuserComponent } from './listuser/listuser.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { TestComponent } from './test/test.component';
import { MainComponent } from './chartsystem/main/main.component';
import { TopThreeProductsComponent } from './chartsystem/top-three-products/top-three-products.component';
import { SalesByCategoryComponent } from './chartsystem/sales-by-category/sales-by-category.component';
import { TopWidgetsComponent } from './chartsystem/top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './chartsystem/sales-by-month/sales-by-month.component';
import { LastFewTransactionsComponent } from './chartsystem/last-few-transactions/last-few-transactions.component';
import { ChartModule } from 'angular-highcharts';
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
    ListuserComponent,
    SpinnerComponent,

    NavBarComponent,
    // TestComponent,
    MainComponent,
    TopThreeProductsComponent,
    SalesByCategoryComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    LastFewTransactionsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ChartModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
