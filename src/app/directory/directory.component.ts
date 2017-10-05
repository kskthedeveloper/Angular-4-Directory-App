import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.ninja = params['ninja']; });
  }

  ngOnInit() {
  }

}
