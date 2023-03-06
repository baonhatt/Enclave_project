import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { Addproduct } from './addproduct/addproduct.component';
import { Manageproduct } from './manageproduct/manageproduct.component';
import { Deleteproduct } from './deleteproduct/deleteproduct.component';
import { Editproduct } from './editproduct/editproduct.component';
import { Chartprice } from './chart/chartprice/chartprice.component';
import {Managestaff} from './managestaff/managestaff.component'
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'manageproduct',component:Manageproduct},
  {path:'addproduct', component:Addproduct},
  {path:'deleteproduct',component:Deleteproduct},
  {path:'editproduct',component:Editproduct},
  {path:'managestaff', component:Managestaff}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

