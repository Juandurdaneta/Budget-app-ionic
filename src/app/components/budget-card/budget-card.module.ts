import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetCardComponent } from './budget-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [BudgetCardComponent],
  exports: [BudgetCardComponent]
})
export class BudgetCardComponentModule {}
