import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    private apiUrl = "http://localhost:3000/publishers";


  constructor(
     private http: HttpClient
  ) { }

  getAll(): Observable<Publisher[]>{
    return this.http.get<Publisher[]>(`${this.apiUrl}`) 
  }

  setDataStorage(key:string, data: Publisher[]){
    localStorage.setItem('key',JSON.stringify(data[0]))
  }

}
