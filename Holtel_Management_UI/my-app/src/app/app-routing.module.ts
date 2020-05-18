import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { ViewComponent } from './view/view.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'signUp', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: BookingComponent },
  { path: 'book', component: BookingComponent },
  { path: 'view', component: ViewComponent },
  { path: 'admin', component: AdminComponent },
  
  
  
  
   { path: '', redirectTo : 'login', pathMatch :'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
