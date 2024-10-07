import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Book } from '../model/books';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  let mockBook: Book = {
    "author": "Livro Teste3",
    "country": "Teste3",
    "imageLink": "Teste3",
    "language": "teste",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 123,
    "title": "Teste",
    "year": 3000,
    "id": "9999999"
}


  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should update the book via PUT request', () => {
  //   const mockBook: Book = {
  //     author: 'Livro Teste4',
  //     country: 'Teste4',
  //     imageLink: 'Teste4',
  //     language: 'teste',
  //     link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
  //     pages: 123,
  //     title: 'Teste',
  //     year: 3000,
  //     id: '9999999'
  //   };

  //  spyOn(httpMock,'put');

    
  //   service.update('9999999', mockBook);

  //   expect(httpMock.put).toHaveBeenCalledWith('9999999', mockBook);
    
  
  // });


  // it('should delete the book via DELETE request', () => {
  //   service.delete('9999999').subscribe((book) => {
  //     expect(book).toEqual(mockBook);
  //   });
  //   spyOn(httpMock,'delete');
  //   expect(httpMock.delete).toHaveBeenCalled();
    
  // });


})
