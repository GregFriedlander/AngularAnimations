import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';



@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css'],
  animations: [
    trigger('changeState', [
        state('rest', style({
            transform: 'scale(1)'
        })),
        state('hover',   style({
            transform: 'scale(2.2)'
        })),
        state('press',   style({
            transform: 'scale(1.2) rotate(180deg)',
            backgroundColor: 'black',
            borderRadius: '10px'
        })),
        transition('rest => hover', animate('400ms ease-in')),
        transition('hover => rest', animate('200ms ease-out')),
        transition('hover => press', animate('2000ms')),
        // transition('hover => press', [
        //     group([
        //         animate('2000ms ease-out', style({
        //             transform: 'scale(1.2) rotate(180deg)'
        //         })),
        //         animate('2000ms ease-out', style({
        //             borderRadius: '10px'
        //         })),
        //     ])
        // ]),
        transition('press => rest', animate('1000ms ease-out'))
    ])
    ]
})
export class MouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentState = 'rest';
  setMouse(state){
    this.currentState = state;
  }

}
