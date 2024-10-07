import { Injectable } from '@angular/core';
import { Profile, User } from '../../models/interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/profile';

  constructor(
    private http: HttpClient,
  ) { }


   public login(user: User): Observable<any>{
     return this.http.get<any>(`${this.apiUrl}?email=${user.authUser}&password=${user.authPass}`) 
      .pipe(
        map(user => {
          if (user) {
            // localStorage.setItem('authToken',this.generateToken()); 
            localStorage.setItem('user',JSON.stringify(user))
            return user;
          } else {
            return "invalid credentials"; 
          }
        })
      );
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
