import { Component, OnInit } from '@angular/core';
import { Calculations } from 'src/app/interfaces/calculations';
import { Movement } from 'src/app/interfaces/movements';
import { MovementsService } from 'src/app/services/movements.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  movements!: [Movement] | null
  calculations!: Calculations

  constructor(
    private movementsService: MovementsService
  ) {}

  ngOnInit() {
    this.getMovements()
    
  }

  ionViewDidEnter(){
    this.getMovements();
  }

  async getMovements(){
    this.movements = await this.movementsService.getMovements()
    // calculate amounts
    if(this.movements){
      this.calculations = this.movementsService.getCalculations(this.movements!)
    } else{
      this.calculations = {
        totalIncome : 0,
        totalExpense: 0,
        total: 0
       }
    }

  }

  doRefresh(event: any){
      this.getMovements();
      event.target.complete();
  }

}
