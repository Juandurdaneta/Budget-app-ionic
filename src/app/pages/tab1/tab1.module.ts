import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { BudgetHeadingContainerComponentModule } from 'src/app/components/budget-heading-container/budget-heading-container.module';
import { BudgetCardComponentModule } from 'src/app/components/budget-card/budget-card.module';
import { MovementContainerComponentModule } from 'src/app/components/movement-container/movement-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    BudgetHeadingContainerComponentModule,
    BudgetCardComponentModule,
    MovementContainerComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
