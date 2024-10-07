import { Component } from '@angular/core';
import { Publisher } from '../../../../shell/src/app/models/interfaces';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.scss'
})
export class PublisherListComponent {

  public publisherList: Publisher[] = [];
  public publisher: Publisher = { id: 0, name: '',  country: '',  founded: 0,  website: '' };
  public headerList: string[] = ['id','name','country','Founded','website'];

  constructor(
    // private pubService: 
  ){
    // const publishers = 
  }


}
