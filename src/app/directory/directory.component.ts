import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})

export class DirectoryComponent implements OnInit {
  ninja: string;
  term = '';
  people = [
    {name: 'Kaung', belt: 'black'},
    {name: 'San', belt: 'blue'},
    {name: 'Kyaw', belt: 'red'},
  ];
  constructor() {

  }

  ngOnInit() {
  }

}
