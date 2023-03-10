
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { DashboardComponent} from './dashboard/dashboard.component'
import { Addproduct } from './addproduct/addproduct.component';
import { Manageproduct } from './manageproduct/manageproduct.component';
import { Deleteproduct } from './deleteproduct/deleteproduct.component';
import { Editproduct } from './editproduct/editproduct.component';
import { ListuserComponent} from './listuser/listuser.component'
import { AuthGuard } from './auth.guard';
import {HomepageComponent} from '../app/homepage/homepage.component'
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  {path:'manageproduct',component:Manageproduct,canActivate:[AuthGuard]},
  {path:'addproduct', component:Addproduct,canActivate:[AuthGuard]},
  {path:'deleteproduct',component:Deleteproduct,canActivate:[AuthGuard]},
  {path:'editproduct',component:Editproduct,canActivate:[AuthGuard]},
  {path:'listuser', component:ListuserComponent,canActivate:[AuthGuard]},
  {path: 'home', component:HomepageComponent,canActivate:[AuthGuard]},
  {path: 'chart', component:ChartComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

