import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PublisherService } from './services/publisher.service';
import { Publisher } from '../../../shell/src/app/models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'mfe-publisher';

 private publisherService = inject(PublisherService);
 public publishers: WritableSignal<Publisher[]> = signal([]);

 ngOnInit(): void {
   this.publisherService.getPublishers();
 }
}
