import { Injectable } from '@angular/core';
import { User } from '../../models/login';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private validateUser = 'user@user';
  // private validatePass = '123456';

  private apiUrl = 'http://localhost:4000/users';

  constructor(
    private http: HttpClient,
  ) { }


   public login(user: User): Observable<{ success: boolean; token?: string; user?: any }> {
    return this.http.post<any>(this.apiUrl, user) 
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('authToken', response.token); // Armazena o token retornado
            return { success: true, token: response.token, user: response.user };
          } else {
            return { success: false }; 
          }
        })
      );
}
///home/dell/host-app/projects/shell/db.json
public login2(){
  this.http.get("db.json").subscribe((res:any) => {
    console.log(res)
  })
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
