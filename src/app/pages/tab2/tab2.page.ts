import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Movement } from 'src/app/interfaces/movements';
import { MovementsService } from 'src/app/services/movements.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isExpense: boolean = true;
  currentDate: String = new Date().toISOString();

  movementForm = this.formBuilder.group({
    amount: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
    notes: '',
    date: this.currentDate
  })


  constructor(
    private formBuilder: FormBuilder,
    private movementsService: MovementsService
  ) {}


  public doToggle(isExpense: boolean):void{
    this.isExpense = isExpense;
  }

  async submitForm(){
    let newMovement: Object = {
      amount: this.movementForm.get('amount')?.value,
      notes: this.movementForm.get('notes')?.value,
      isExpense: this.isExpense,
      date: this.movementForm.get('date')?.value
    }

    this.movementsService.storeMovement(newMovement)

  }

}
