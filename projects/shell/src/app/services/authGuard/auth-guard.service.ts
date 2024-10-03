import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('usuario autenticado', this.authService.isAuthenticated())
      return true;
    } else {
      this.router.navigate(['']);
      // console.log('não tem autenticação');
      return false;
    }
  }
}