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
      movements.push(movement);
      this._storage?.set('MOVEMENTS', movements);
    } else{
      this._storage?.set('MOVEMENTS', [movement]);
    }


  }

  
  async getMovements(){
    let movements : [Movement] | null = await this.storage?.get('MOVEMENTS');
    return movements
  }

  getCalculations(movements: [Movement]){
    let totalIncome: number = 0
    let totalExpense: number = 0
    let total:number = 0


    // calculating income/expense/total

    movements.map((movement) =>{

      if(movement.isExpense){
        total -= movement.amount
        totalExpense += movement.amount
      } else{
        total += movement.amount
        totalIncome += movement.amount
      }
    })


    return {totalIncome: totalIncome, totalExpense: totalExpense, total: total}

  }

}
