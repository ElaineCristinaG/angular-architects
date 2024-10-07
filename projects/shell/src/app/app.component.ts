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
    console.log('init publisher shell')
    const obs: Observer<any> = {
      next: (data) => {
       
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
    this.storageService.getAll().subscribe(obs);
   
    
  }
  //teste
  private getStoragePublishers(): Publisher[] | null {
  const pub = localStorage.getItem('publishers_shell');
  console.log(pub)
  if (pub) {
    try {
      const parsePub: Publisher[] = JSON.parse(pub);
      console.log(parsePub);
      return parsePub;
    } catch (error) {
      console.error('Erro ao parsear o JSON do localStorage:', error);
      return null; 
    }
  }
  
  return null; 
}

}
