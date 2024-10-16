import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherListComponent } from './publisher-list.component';
import { PublisherService } from '../services/publisher.service';

describe('PublisherListComponent', () => {
  let component: PublisherListComponent;
  let fixture: ComponentFixture<PublisherListComponent>;
  let publisherMock: PublisherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublisherListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherListComponent);
    publisherMock = TestBed.inject(PublisherService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(publisherMock,'getPublishers');
  });

  it('should create', () => {
    const event = new Event('storage-updated');
    window.dispatchEvent(event);
    expect(component).toBeTruthy();
    expect(publisherMock.getPublishers).toHaveBeenCalled();
  });
});
