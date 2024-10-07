import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile, ProfileResponse } from '../../models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

 private apiUrl = "http://localhost:3000/profile";

  constructor(
    private http: HttpClient,
  ) { }

  public create(user: Profile):Observable<Object>{
    return this.http.post(`${this.apiUrl}`,user);
  }

  public listUser(): Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.apiUrl}`)
  }
  public delete(id: string): Observable<Profile>{
    return this.http.delete<Profile>(`${this.apiUrl}/${id}`)
  }

  public update(obj: Profile, id: string): Observable<Profile>{
    return this.http.put<Profile>(`${this.apiUrl}/${id}`,obj)
  }

  public getByEmail(email: string) :Observable<ProfileResponse[]>{
    return this.http.get<ProfileResponse[]>(`${this.apiUrl}?email=${encodeURIComponent(email)}`)
  }

}

  

