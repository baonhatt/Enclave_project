import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TestComponent } from './test/test.component';
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
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
