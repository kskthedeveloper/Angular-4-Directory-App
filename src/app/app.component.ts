import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent {
  constructor(private dataService: DataService) {

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

  ngOnInit() {
    // this.dataService.fetchData();
  }

}

