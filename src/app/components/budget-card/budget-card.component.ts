import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {

  @Input() amount!: number;
  @Input() title!: string;
  @Input() isExpense!: boolean;



  constructor() { }

  ngOnInit() {}

}
