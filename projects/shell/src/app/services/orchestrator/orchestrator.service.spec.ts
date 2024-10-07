import { TestBed } from '@angular/core/testing';

import { OrchestratorService } from './orchestrator.service';
import { Profile } from '../../models/interfaces';
import { Book } from '../../../../../mfe-books/src/app/model/books';

describe('OrchestratorService', () => {
  let service: OrchestratorService;
  const mockProfile: Profile = { email: '',name: '',password: '' };
  const mockBook: Book = { author: '', country: '', imageLink: '', language: '', link: '', pages: 0, title: '', year: 0, id: '' }
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrchestratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shold be called clearProfile and return object type Book', () => {
    let result = service.clearBook();
    expect(result).toBe(mockBook) 
  })
  
  it('shold be called clearProfile and return object type Profile', () => {
    let result = service.clearProfile();
     expect(result).toBe(mockProfile) 
  })


});
