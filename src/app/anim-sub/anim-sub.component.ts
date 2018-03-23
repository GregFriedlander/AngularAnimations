import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group } from '@angular/animations';

@Component({
  selector: 'anim-sub',
  templateUrl: './anim-sub.component.html',
  styleUrls: ['./anim-sub.component.css'],
  animations: [
    trigger('changeState', [
      state('square', style({
        backgroundColor: 'black',
        // transform: 'scale(1)',
        width: '250px',
        height: '250px',
        margin: '6rem',
        marginLeft: '25%',
        borderLeft: '0px solid white',
        borderRight: '0px solid white',
        borderBottom: '0px solid',
      })),
      state('triangle', style({
        // backgroundColor: 'transparent',
        // transform: 'scale(1)',
        width: '0',
        height: '0',
        borderLeft: '150px solid white',
        borderRight: '150px solid white',
        borderBottom: '250px solid ',
      })),
      state('basic', style({
        backgroundColor: 'tan',
        transform: 'scale(1.7)'
      })),
      state('delaying', style({
        backgroundColor: 'blue',
        borderRadius: '50px',
        transform: 'scale(1.4)',
      })),
      state('easing', style({
        backgroundColor: 'grey',
        borderRadius: '90px',
        transform: 'scale(2)',
      })),
      state('stepped', style({
        backgroundColor: 'green',
        borderRadius: '190px',
        transform: 'scale(1)'
      })),
      state('parallel', style({
        backgroundColor: 'orange',
        transform: 'scale(.4) rotate(45deg)'
      })),
      transition('* => basic', animate('800ms')),
      transition('* => square', animate('200ms')),
      transition('* => triangle', animate('1000ms ease-in-out')),
      transition('* => delaying', animate('800ms 500ms ease-out')),
      transition('* => easing', animate('800ms ease-in-out')),
      transition('* => stepped', [
        animate('5000ms ease-in-out', keyframes([
            style({backgroundColor: 'blue', borderRadius: '10px', transform: 'scale(1.4)', offset: 0.2}),
            style({backgroundColor: 'red', borderRadius: '80px', transform: 'scale(0.8)', offset: 0.4}),
            style({backgroundColor: 'teal', borderRadius: '0px', transform: 'scale(1.2)', offset: 0.7}),
            style({backgroundColor: 'green', borderRadius: '190px', transform: 'scale(1)', offset: 0.9})
        ])),  
      ]),
      transition('* => parallel', [
        group([
            animate('2000ms ease-out', style({
                backgroundColor: 'orange'
            })),
            animate('2000ms ease-out', style({
                transform: 'scale(.4) rotate(45deg) rotateX(180deg)'
            }))
        ])
      ]),
    ])
  ]
})
export class AnimSubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() currentState;
  

}
