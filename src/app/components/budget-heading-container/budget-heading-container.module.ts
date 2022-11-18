import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetHeadingContainerComponent } from './budget-heading-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [BudgetHeadingContainerComponent],
  exports: [BudgetHeadingContainerComponent]
})
export class BudgetHeadingContainerComponentModule {}
