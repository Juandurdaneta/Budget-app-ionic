import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ToggleExpenseComponentModule } from 'src/app/components/toggle-expense/toggle-expense.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    ToggleExpenseComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
