import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group, useAnimation } from '@angular/animations';
import { colorAnimation } from '../animations';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  animations: [
    trigger('changeState', [
        state('square', style({
            transform: 'scale(1)'
        })),
        state('circle',   style({
            transform: 'scale(1)',
            borderRadius: '250px',
        })),
        state('yellow',   style({
            transform: 'scale(1)',
            backgroundColor: 'yellow',
        })),
        state('blue',   style({
            transform: 'scale(1)',
            backgroundColor: 'blue',
            // borderRadius: '100px'
        })),
        state('green',   style({
            transform: 'scale(1)',
            backgroundColor: 'green',
        })),
        state('black',   style({
            transform: 'scale(1)',
            backgroundColor: 'black',
        })),
        transition('square => circle', animate('1000ms ease-in')),
        transition('circle => square', animate('1000ms ease-in')),
        transition('* => square', animate('500ms ease-in')),        
        transition('* => yellow', animate('500ms ease-in')),
        transition('* => blue', animate('500ms ease-in')),
        transition('* => green', animate('500ms ease-in')),
        transition('* => black', animate('500ms ease-in')),
    ])
    ]
})
export class CustomComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  currentShape = 'square';
  currentColor = 'black';

  changeShape(value){
    console.log('value = ', value);
    this.currentShape = value;
  }

  changeColor(value){
    this.currentColor = value;
  }

  currentState = 'square'; 
  setState(state){
    this.currentState = state;
    this.changeColor = state;
    if(state == 'square'){
      this.currentShape = 'square';
    }else if(state == 'circle'){
      this.currentShape = 'circle';
    }
    console.log('currentState = ', this.currentState);
  }

}
