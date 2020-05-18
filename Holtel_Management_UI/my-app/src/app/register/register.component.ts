import { Component, OnInit } from '@angular/core';
import { UserDetails } from './UserDetails';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  
  userData : UserDetails;
  

  profileForm = this.fb.group({
    username : [''],
    password : [''],
    type : [''],
    // firstName: [''],
    // lastName: [''],     
    //   city: [''],
    //   state: [''],
    //   zip: ['']
  
  });



  constructor(private fb: FormBuilder, private userservice : UserService) {  
    this.userData = new UserDetails();

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('register  Submitted'  );

    let userName = this.profileForm.controls['username'].value;
    let password = this.profileForm.controls['password'].value;
    let type = this.profileForm.controls['type'].value;
   

    this.userData.username = userName;
    this.userData.password = password;
    this.userData.type = type;

    console.warn(userName);
    
    
    this.userservice.addUser(this.userData).subscribe(res=>{
      console.log(res);

    },
    error=>{
      console.log('--Some Error Occured Suraj');

    });

    
    
  }
}
