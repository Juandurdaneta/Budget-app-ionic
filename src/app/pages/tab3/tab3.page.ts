import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/interfaces/movements';
import { MovementsService } from 'src/app/services/movements.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  isExpense: boolean = true;
  movements!: [Movement] | null

  constructor(
    private movementsService: MovementsService
  ) {
  }

  ngOnInit() {
    this.getMovements()
  }

  public doToggle(isExpense: boolean):void{
    this.isExpense = isExpense;
  }

  
  async getMovements(){
    this.movements = await this.movementsService.getMovements()
    console.log(this.movements)
  }

}
