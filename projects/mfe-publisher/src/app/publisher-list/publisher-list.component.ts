import { Component, effect, OnInit } from '@angular/core';
import { Publisher } from '../../../../shell/src/app/models/interfaces';
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.scss'
})
export class PublisherListComponent implements OnInit{

  public publishers: Publisher[] = [];
  public publisher: Publisher = { id: 0, name: '',  country: '',  founded: 0,  website: '' };
  public headerList: string[] = ['id','name','country','Founded','website'];

  constructor(
    private publisherService: PublisherService,
  ){
    window.addEventListener('storage-updated', () => {
      publisherService.getPublishers();
    });

    effect(()=>{
      this.publishers = publisherService.publisherList();
    })
  
  }

  ngOnInit(): void {
    this.publisherService.getPublishers();
  }

  


  }

  




