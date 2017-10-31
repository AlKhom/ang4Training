import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import {FilterPipe} from '../filter.pipe';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
classes = {'blue': false, 'red': true, 'underline': false};
  cars= [
    {model: 'toyota', color: 'blue'},
    {model: 'ford', color: 'red'},
    {model: 'fiat', color: 'grey'}
  ]
// test = true;
//
// change() {
//   this.test ? this.test = false : this.test = true;
// }
constructor(private logger: LoggingService) {}
logIt() {
    this.logger.log();
}

  ngOnInit() {
  }

}
