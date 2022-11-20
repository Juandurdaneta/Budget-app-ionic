import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-expense',
  templateUrl: './toggle-expense.component.html',
  styleUrls: ['./toggle-expense.component.scss'],
})
export class ToggleExpenseComponent implements OnInit {

  @Input() isExpense!: boolean;
  @Input() callbackFunction!: () => void;
  @Output() onToggleExpense = new EventEmitter<any>();



  constructor() { }

  ngOnInit() {}

  public toggle(isExpense: boolean): void{
    this.onToggleExpense.emit(!isExpense);
  }

}
