import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.less']
})
export class LecturesComponent implements OnInit {
  x = 12;
  constructor() { }
  constructor( public usersService : usersService) {
  }

  ngOnInit() {

  }

  incrementX() {
    this.x = this.x + 1;
  }
  subtractionX() {
    this.x = this.x - 1;
  }

}
