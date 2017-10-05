import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:  [LoggingService]
})

export class DirectoryComponent implements OnInit {
  ninja: string;
  term = '';
  people = [
    {name: 'Kaung', belt: 'black'},
    {name: 'San', belt: 'blue'},
    {name: 'Kyaw', belt: 'red'},
  ];
  constructor(private logger: LoggingService) {

  }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
