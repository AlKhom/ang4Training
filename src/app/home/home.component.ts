import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user;
  @Input() person23;


    homeTitle  = 'Welcome to home page';
  myString = 'I like read';
  ifRequire = 'false';

  alertMe(val) {
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
