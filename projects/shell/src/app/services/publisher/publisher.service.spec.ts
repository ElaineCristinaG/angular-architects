import { TestBed } from '@angular/core/testing';

import { PublisherService } from './publisher.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PublisherService', () => {
  let service: PublisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(PublisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
