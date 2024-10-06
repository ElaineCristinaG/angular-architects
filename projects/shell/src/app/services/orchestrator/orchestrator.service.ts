import { Injectable, signal, WritableSignal } from '@angular/core';
import { Book } from '../../../../../mfe-books/src/app/model/books';
import { Profile, User } from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {
 
  public formRegister = signal(false);
  public openBooks = signal(false);
  public openModal = signal(false);
  public openfeedback = signal(false);

  public user:WritableSignal<Profile> = signal({ email: '',id: '',name: '',password: '' });

  public book: WritableSignal<Book> = signal(
    { author: '', country: '', imageLink: '', language: '', link: '', pages: 0, title: '', year: 0, id: '' }
  ) 

  constructor() { }

}
