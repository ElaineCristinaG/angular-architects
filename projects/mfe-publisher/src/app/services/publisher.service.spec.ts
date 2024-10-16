import { TestBed } from '@angular/core/testing';

import { PublisherService } from './publisher.service';

describe('PublisherService', () => {
  let service: PublisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherService);
  });

  beforeEach(() =>{
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'publishers_shell') {
        let result =  JSON.stringify([{ id: 1, name: 'Publisher 1' }]); // Dados simulados
        console.log(result);
        return result
      }
      return null;
    });

    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => {
      // console.log(`Salvando no localStorage: ${key}, valor: ${value}`);
    });

    spyOn(localStorage, 'removeItem').and.callFake((key: string) => {
      // console.log(`Removendo do localStorage: ${key}`);
    });
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should called getPublishers and call localStorage.getItem with "publishers_shel" ',() => {
    service.getPublishers();
    expect(localStorage.getItem).toHaveBeenCalledOnceWith('publishers_shell')
   
  })
});
