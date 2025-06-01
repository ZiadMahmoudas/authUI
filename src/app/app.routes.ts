import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path:"login",component:LoginComponent,title:"Login"},
  {path:"",component:LoginComponent,title:"Login"},
  {path:"signup",component:SignupComponent,title:"Signup"},
  {path:"dashboard",component:DashboardComponent,title:"Dashboard"},
];
