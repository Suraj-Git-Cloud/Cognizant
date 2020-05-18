import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { UserDetails } from '../register/UserDetails';
import { BookingData } from '../booking/bookingdata';
import { MyrouterService } from '../myrouter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  private bearerToken:string;
  private errmsg:string;
  public submitMessage : string;

  username = new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)]));
  password = new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)]))


  userDetailsList : Array<UserDetails>;
  userCredentials : UserDetails;


  
  constructor(private formbuilder : FormBuilder, private userService : UserService, private routerService : MyrouterService) {
    this.userDetailsList =[]; 
     this.userCredentials = new UserDetails();

    this.loginForm = formbuilder.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(3)])]  
  
      
    });


   }
  ngOnInit(): void {
  }

  loginSubmit() {
   
  this.userCredentials.username = this.username.value;  
  this.userCredentials.password = this.password.value;

  this.userService.getAllUsers().subscribe(res=>{    
    this.userDetailsList = res; 
   })  
  
  let type=this.isValid(this.userDetailsList);

if(type==0)
{
  this.routerService.routeToBooking();
}
else if (type==1)
{
  this.routerService.routeToRegister();
}
else if(type==2)
{
  this.routerService.routeToAdmin();
}

  }  // submit closure

  isValid(users : UserDetails[]) {
    let type=-1;
      for( let k =0;k<users.length;k++) {
        if(users[k].username==this.userCredentials.username && users[k].password == this.userCredentials.password)
        {
            return users[k].type;
        }
      }
      return type;
}

  getErrorMessage()
  {
    return this.username.hasError('required')?'User Name cannot be blank':
    this.password.hasError('required')?'Password cannot be blank':'';
  }

}
