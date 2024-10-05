import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = "http://localhost:3000/books";

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiUrl}`) 
  }

  create(book: Book):Observable<Book>{
    return this.http.post<Book>(`${this.apiUrl}`,book)
  }

  update(id: string, book: Book ):Observable<Book>{

    return this.http.put<Book>(`${this.apiUrl}/${id}`,book,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
   delete(id: string):Observable<Book>{
    return this.http.delete<Book>(`${this.apiUrl}/${id}`)
   }

 



}
