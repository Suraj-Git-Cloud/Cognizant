import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './register/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUsers() :Observable<UserDetails[]> {

    return this.http.get<UserDetails[]>('http://localhost:3000/users');

  }

  addUser(user : UserDetails) : Observable<UserDetails>  {
   return this.http.post<UserDetails>('http://localhost:3000/users', user);
  }


}
