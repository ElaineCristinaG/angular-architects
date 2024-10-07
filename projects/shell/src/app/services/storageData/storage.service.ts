import { Injectable } from '@angular/core';
import { Publisher } from '../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  setDataStorage(key:string, data: Publisher[]){
    localStorage.setItem(key,JSON.stringify(data));
    window.dispatchEvent(new Event('storage-updated'));
  }

}
