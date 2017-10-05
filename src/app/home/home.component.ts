import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  classes = {'blue': true, 'red': false, 'underline': true};
  test = true;

  @Input() person;
  @Output() onYell = new EventEmitter();
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

  fireYellEvent(e) {
    this.onYell.emit();
  }
}
