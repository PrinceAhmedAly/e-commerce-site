import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoggedIn:boolean = false;

  userName:string = '';
  password:string = '';

  constructor(private userAuthService: UserAuthService) {

  }

  ngonInit() {
    this.isLoggedIn = this.userAuthService.isLoggedIn();
  }


  userLogin() {
    this.userAuthService.login(this.userName, this.password);
  
    this.isLoggedIn = this.userAuthService.isLoggedIn();


  }

  userLogOut() {  
    this.userAuthService.logOut();
    this.isLoggedIn = this.userAuthService.isLoggedIn();

  }
}
