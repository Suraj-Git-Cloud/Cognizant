import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';



import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
// import { Routes, RouterModule } from '@angular/router';


// const approutes: Routes = [
//   { path: 'signUp', component: RegisterComponent },
//   { path: 'login', component: LoginComponent},
//   { path: 'dashboard', component: DashboardComponent},
  
//   { path: ' ', redirectTo : 'dashboard', pathMatch :'full'},
 
// ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BookingComponent,
    NavComponent,
    HeaderComponent,
    DashboardComponent,
    AdminComponent,
    GuestComponent,
    CancelBookingComponent,
    ViewComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DatePickerModule,
    MatToolbarModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
   MatButtonModule, MatSidenavModule, MatIconModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { ViewComponent } from './view/view.component';


