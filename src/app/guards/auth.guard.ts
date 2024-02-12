import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  let userAuthService = inject(UserAuthService)
  if(userAuthService.isLoggedIn()) {
    return true
  } else {
    alert("Please Login first to View the Cart");
    return false;
  }
  };
