import { Injectable, signal, WritableSignal } from '@angular/core';
import { Book } from '../../../../../mfe-books/src/app/model/books';
import { Profile, Publisher, User } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {
 
  public formRegister = signal(false);
  public openBooks = signal(false);
  public openModal = signal(false);
  public openfeedback = signal(false);
  public messageFeed = signal('');
  public user:WritableSignal<Profile> = signal({ email: '',name: '',password: '' });

  public book: WritableSignal<Book> = signal( this.clearBook() ) 

  constructor() { }
 
  public reload(){
    window.location.reload()
  }

  public clearBook(): Book{
    return  { author: '', country: '', imageLink: '', language: '', link: '', pages: 0, title: '', year: 0, id: '' }
  }

  public clearProfile(): Profile{
    return { email: '',name: '',password: '' }
  }

  public inicializePublisher():Publisher{
    return { id: 0,name:'', country: '',founded: 0,website:'' }
  }

}
