import { Component, Input, OnInit } from '@angular/core';
import { Movement } from 'src/app/interfaces/movements';

@Component({
  selector: 'app-movement-container',
  templateUrl: './movement-container.component.html',
  styleUrls: ['./movement-container.component.scss'],
})
export class MovementContainerComponent implements OnInit {
  isModalOpen = false;

  @Input() movement: Movement | undefined;
  options: Object = {
    month: "short",
    day: "numeric",
    year: "numeric"
  }

  movementDateLocaleString!: String;

  constructor() { }

  ngOnInit() {
    this.movementDateLocaleString = new Date(this.movement!.date).toLocaleDateString('es-MX', this.options)
  }


  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }


}