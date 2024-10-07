import { Component, effect, OnInit } from '@angular/core';
import { Publisher } from '../../../../shell/src/app/models/interfaces';
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.scss'
})
export class PublisherListComponent implements OnInit{

  public publisherList: Publisher[] = [];
  public publisher: Publisher = { id: 0, name: '',  country: '',  founded: 0,  website: '' };
  public headerList: string[] = ['id','name','country','Founded','website'];

  constructor(
    private servicePub: PublisherService,
  ){
    window.addEventListener('storage-updated', () => {
      servicePub.getPublishers();
    });
  
  }

  ngOnInit(): void {
    this.servicePub.getPublishers();
  }


  }

  




