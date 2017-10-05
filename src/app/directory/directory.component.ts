import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;

  people = [
    {name: 'Name1', belt: 'black'},
    {name: 'Name2', belt: 'blue'},
    {name: 'Name3', belt: 'red'},
  ];
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.ninja = params['ninja']; });
  }

  ngOnInit() {
  }

}
