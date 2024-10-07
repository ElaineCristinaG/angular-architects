import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { OrchestratorService } from './services/orchestrator/orchestrator.service';
import { StorageService } from './services/storageData/storage.service';
import { Observer } from 'rxjs';
import { Publisher } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Books & Publisher';

  private orcService= inject(OrchestratorService);
  private storageService = inject(StorageService);

  public publishers:WritableSignal<Publisher[]> = signal([]);

 ngOnInit(): void {
   this.getPublishers();
 }

  getPublishers(){
    const obs: Observer<any> = {
      next: (data) => {
          this.publishers.set(data)
          this.storageService.setDataStorage('publishers_shell',this.publishers())
      },
      error: (error) => {
         if (error.error && error.error.message) {
         console.log('Error publishers data Storage');
        } 
      },
      complete: () => {
        console.log('Data Publishers in LocalStorage');
      }
    }
    this.storageService.getAll().subscribe(obs);
    
  }
}
