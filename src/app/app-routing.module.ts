import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { ForgotComponent } from './users/forgot/forgot.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { RegisterComponent } from './users/register/register.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardGuard } from './auth-guard.guard'


const routes: Routes = [
  { path:'',component: HomeComponent},
  { path:'user/register',component: RegisterComponent},
  { path:'user/login', component: LoginComponent},
  { path:'user/forgot',component: ForgotComponent},
  { path:'list-user/:id',component: ListUserComponent, canActivate : [AuthGuardGuard]}, 
  { path:'list-admin/:id', component: ListAdminComponent, canActivate : [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
