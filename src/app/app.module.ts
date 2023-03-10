import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular-highcharts';
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
import { TopWidgetsComponent } from './chart/top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './chart/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './chart/sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './chart/last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './chart/top-three-products/top-three-products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChartComponent } from './chart/chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
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
    ChartComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent,
    HomepageComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ChartModule,
    NgApexchartsModule,
    MatCardModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
