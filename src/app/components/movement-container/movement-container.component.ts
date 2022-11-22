import { Component, Input, OnInit } from '@angular/core';
import { Movement } from 'src/app/interfaces/movements';

@Component({
  selector: 'app-movement-container',
  templateUrl: './movement-container.component.html',
  styleUrls: ['./movement-container.component.scss'],
})
export class MovementContainerComponent implements OnInit {

  @Input() movement: Movement | undefined;

  constructor() { }

  ngOnInit() {
    if(this.movement){
      console.log('hey')
    }
  }

  

}
