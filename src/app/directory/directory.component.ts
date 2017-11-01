import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {FilterPipe} from '../filter.pipe';
import {LoggingService} from "../logging.service";
import {DataService} from "../data.service";
declare var firebase

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
classes = {'blue': false, 'red': true, 'underline': false};
  cars= [];
  numbers;
// test = true;
//
// change() {
//   this.test ? this.test = false : this.test = true;
// }
constructor(private logger: LoggingService, private dataService: DataService) {}

logIt() {
    this.logger.log();
}

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   (data) => this.cars = data
    // );
    // this.numbers = this.dataService.getData();
    this.fbFetData();
}
  sendNumber() {
  this.dataService.setData(this.numbers);
  }


  fbFetData() {
  firebase.database().ref('/').on('child_added', (snapshot) => {
    this.cars.push(snapshot.val());
  });
  }

  }
