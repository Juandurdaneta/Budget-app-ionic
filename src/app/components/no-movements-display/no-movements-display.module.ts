import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {RouterModule} from '@angular/router';

import { NoMovementsDisplayComponent } from './no-movements-display.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [NoMovementsDisplayComponent],
  exports: [NoMovementsDisplayComponent]
})
export class NoMovementsDisplayComponentModule {}
