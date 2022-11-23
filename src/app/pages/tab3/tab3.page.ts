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
  movements!: [Movement] | null;
  expenses !: [Movement] | null;
  income !: [Movement] | null;

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

    let tempExpenses: [Movement]
    let tempIncome: [Movement]

    if(this.movements){
      this.movements!.map((movement)=>{
        if(movement.isExpense){
          try {
          tempExpenses.push(movement);
          this.expenses = tempExpenses;

          } catch (error) {
            tempExpenses = [movement];
            this.expenses = tempExpenses;
          }
        } else{
          try {
            tempIncome.push(movement);
            this.income = tempIncome;
          } catch (error) {
            tempIncome = [movement];
            this.income = tempIncome;
          }
        }
      })
    }






  }

  doRefresh(event: any){
    this.getMovements();
    event.target.complete();
}


}
