import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
classes = {'blue': false, 'red': true, 'underline': false};
test = true;

change() {
  this.test ? this.test = false : this.test = true;
}
constructor() {}
  ngOnInit() {
  }

}
