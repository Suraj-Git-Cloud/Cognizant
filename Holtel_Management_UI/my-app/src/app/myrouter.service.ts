import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyrouterService {

  constructor(private router : Router) {

   }

routeToLogin() {
this.router.navigate(['login']);
}

routeToBooking(){
  this.router.navigate(['book']);
}

routeToViewBooking() {
  this.router.navigate(['view']);
}
routeToRegister() {

  this.router.navigate(['signUp']);

}

routeToAdmin() {
  this.router.navigate(['admin']);
}



} // class closure
