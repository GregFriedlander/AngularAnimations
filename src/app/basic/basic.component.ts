import { Component, OnInit } from '@angular/core';
import { colorAnimation } from '../animations';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  newColor: any = {from: 'black', to: ''};

  ngOnInit() {
  }

  switchState = 'square';
  setState(state){
    this.switchState = state;
    console.log(state);
  }

}
