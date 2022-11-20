import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ToggleExpenseComponentModule } from 'src/app/components/toggle-expense/toggle-expense.module';
import { MovementContainerComponentModule } from 'src/app/components/movement-container/movement-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ToggleExpenseComponentModule,
    MovementContainerComponentModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
