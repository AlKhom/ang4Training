import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user;
  @Input() person23;
  @Output() hereNameFromHome = new EventEmitter();


    homeTitle  = 'Welcome to home page';
  myString = 'I like read';
  ifRequire = 'false';

  alertMe(val) {
    alert(val);
  }
  someFunctionInHome(e) {
    this.hereNameFromHome.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
