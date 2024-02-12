import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isLogged:boolean = false;

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit() {
    // this.isLogged = this.userAuthService.isLoggedIn();
    this.userAuthService.getLoggingStatus().subscribe(status => {
      this.isLogged = status;
    });
  } 
}
