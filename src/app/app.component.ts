import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {

  }
  title = 'Testing';
  name = 'Kaung San';

  person = {
    name: 'Person1',
    location: 'YGN'
  };

  yell(e) {
    alert('I am yelling');
  }
}
