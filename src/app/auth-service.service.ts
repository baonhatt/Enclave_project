import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInstate = false;

  setIsLoggedInstate(isLoggedInstate:boolean) {
    this.isLoggedInstate = isLoggedInstate;
  }

  getIsLoggedInstate(): boolean {
    return this.isLoggedInstate
  }


  isLoggedIn(): boolean {
    return this.isLoggedInstate;
  }
}
