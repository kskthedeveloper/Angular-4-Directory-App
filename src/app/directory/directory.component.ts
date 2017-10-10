import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase:any;
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [ DataService ]
})

export class DirectoryComponent implements OnInit {
  ninja: string;

  name: string = "";
  belt: string = "";

  term = '';
  people: any[] = [];
  constructor(private dataService: DataService) {}

  // logIt(){
  //   this.logger.log();
  // }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   (data) => this.people = data
    // )
    
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.people.push(snapshot.val())
    })
  }

  fbPostData() {
    // console.log(this.name + "->" + this.belt);
    firebase.database().ref('/').push({name: this.name, belt: this.belt});
  }
}
