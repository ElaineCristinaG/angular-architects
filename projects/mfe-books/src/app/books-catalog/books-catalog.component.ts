import { Component, inject, signal, WritableSignal } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/books';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.scss'
})
export class BooksCatalogComponent {

  //buscar os dados de books 

  public book: Book = {
    author: "",
    country: "",
    imageLink: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 0,
    id: "",
  };

  public booksList: Book[] = [];

  public booksFiltered: WritableSignal<Book[]> = signal([]);
  public openModal = signal(true);
  public modaledit = signal(true);
  


  constructor(
    private bookService: BookService
  ){ 
      this.getBooks();
    
    }

  private getBooks(){
    this.booksList = [];
    this.bookService.getAll().subscribe(books => {
      if(books.length > 0){
        this.booksList = books
        this.booksFiltered.set(books);
       this.booksList = [];
      }else{
        console.log('Has not Books')
      }
    })
  }

  public createBook(book:Book){
    //pegar os valores do formulario
    this.bookService.create(book).subscribe(resp =>{
      console.log(resp)
    })
  }

  public editBook(event: Book){
    this.bookService.update(event.id, event).subscribe(resp => {
      console.log(resp)
    })
  }

  public deleteBook(event: Book){
    this.bookService.delete(event.id).subscribe(resp => {
      console.log('Book deleted Success')
    })

  }

  public booking(book: Book){

  }

  public filter(event: any){
    console.log('filtrar')
    const searchTerm = event.target.value.toLowerCase();
    this.booksList = this.booksFiltered().filter(
        card =>
        card.title.toLowerCase().includes(searchTerm) 
        //||
        // card.author.toLowerCase().includes(searchTerm) ||
        // card.country.toLowerCase().includes(searchTerm)
    )
    
  }

}
