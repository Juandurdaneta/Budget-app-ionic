import { Injectable } from '@angular/core';
import { Movement } from '../interfaces/movements';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  private _storage: Storage | null = null;

  constructor(
    private storage: Storage
  ) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async storeMovement(movement: Object){

    let movements : [Object] | null = await this.storage?.get('MOVEMENTS');

    if(movements){
      console.log(movements)
      movements.push(movement);
      this._storage?.set('MOVEMENTS', movements);
    } else{
      this._storage?.set('MOVEMENTS', [movement]);
    }


  }
}
