import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovementContainerComponent } from './movement-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MovementContainerComponent],
  exports: [MovementContainerComponent]
})
export class MovementContainerComponentModule {}
