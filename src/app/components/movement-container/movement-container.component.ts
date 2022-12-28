import { Component, Input, OnInit } from '@angular/core';
import { Movement } from 'src/app/interfaces/movements';
import { MovementsService } from 'src/app/services/movements.service';


@Component({
  selector: 'app-movement-container',
  templateUrl: './movement-container.component.html',
  styleUrls: ['./movement-container.component.scss'],
})
export class MovementContainerComponent implements OnInit {
  isModalOpen = false;

  @Input() movement: Movement | null | undefined;
  @Input() callback: Function | undefined;

  options: Object = {
    month: "short",
    day: "numeric",
    year: "numeric"
  }

  movementDateLocaleString!: String;

  constructor(
    private movementsService: MovementsService
  ) { }

  ngOnInit() {
    this.movementDateLocaleString = new Date(this.movement!.date).toLocaleDateString('es-MX', this.options)
  }


  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }

  deleteMovement(tx: Movement){
    this.setOpen(false);
    this.movementsService.deleteMovement(tx);
    this.movement = undefined;

    if(this.callback) {
      this.callback();
    };
  }



}