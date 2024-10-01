import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validateUser = 'user@user';
  private validatePass = '123456';

  constructor() { }

  public login(user: User){
    
    if (user.authUser === this.validateUser && user.authPass === this.validatePass) {
     
      localStorage.setItem('authToken', this.generateToken());
      return true;
    }
    return false;
  }

 
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  
  public logout(): void {
    localStorage.removeItem('authToken');
  }

  public generateToken(): string {
  let u = new Uint32Array(1);
  window.crypto.getRandomValues(u);
  let str = u[0].toString(16).toUpperCase();
  return '00000000'.slice(str.length) + str;
}
  
}
