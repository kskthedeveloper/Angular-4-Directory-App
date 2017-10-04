import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = 'Welcome to the ninja directory!';
  myString = 'This is my String. Are you sure about that';
  myBoolean = true;

  myTest = 'This is myTest';
  ninja = {
    name: 'Name1',
    belt: 'Belt1'
  };

  constructor() { }

  ngOnInit() {
  }

  alertMe(val) {
    alert(val);
  }
}
