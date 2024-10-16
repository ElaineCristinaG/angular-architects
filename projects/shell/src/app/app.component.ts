import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { StorageService } from './services/storageData/storage.service';
import { Observer } from 'rxjs';
import { Publisher } from './models/interfaces';
import { PublisherService } from './services/publisher/publisher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Books & Publisher';

  private storageService = inject(StorageService);
  private publisherService = inject(PublisherService);

  public publishers:WritableSignal<Publisher[]> = signal([]);

 ngOnInit(): void {
   this.getPublishers();
 }

  getPublishers(){
   
    const obs: Observer<any> = {
      next: (data) => {
        // console.log(data)
          this.publishers.set(data);
           console.log(this.publishers()) //for debug
          this.storageService.setDataStorage('publishers_shell',data)
      },
      error: (error) => {
         if (error.error && error.error.message) {
         console.log('Error publishers data Storage');
        } 
      },
      complete: () => {
        console.log('Data Publishers in LocalStorage, key: publishers_shell');
      }
    }
    this.publisherService.getAll().subscribe();
   
    
  }
 
}
