import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-heading-container',
  templateUrl: './budget-heading-container.component.html',
  styleUrls: ['./budget-heading-container.component.scss'],
})
export class BudgetHeadingContainerComponent implements OnInit {

  @Input() amount!: number;

  constructor() { }



  ngOnInit() {}

}
