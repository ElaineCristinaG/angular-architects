import { Injectable, signal, WritableSignal } from '@angular/core';
import { Publisher } from '../../../../shell/src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

public publisherList: WritableSignal<Publisher[]> = signal([]);


getPublishers(){
 
    const pub = localStorage.getItem('publishers_shell');
    if(pub){
      try{
        const parsePub: Publisher[] = JSON.parse(pub);
        this.publisherList.set(parsePub)
        console.log('Success in Publishers of local Storage ')

      }catch (error) {
        console.error('Erro ao parsear o JSON do localStorage:', error);
      }

    }else{
      console.log('não tem pub');
    }
}



}
