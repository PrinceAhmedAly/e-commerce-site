import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLoggedStatus!: BehaviorSubject<boolean>;

  constructor() {

    this.isLoggedStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
   }

  login(mail:string, password:string) {

    this.isLoggedStatus.next(true)
    // token
    let token = "zdgfdgesrest"
    localStorage.setItem('token', token)
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedStatus.next(false);
  }


  isLoggedIn():boolean {

  return  localStorage.getItem('token')? true : false
  }

  // method to return the subject
  getLoggingStatus():BehaviorSubject<boolean> {
    
    return this.isLoggedStatus;
} 
}