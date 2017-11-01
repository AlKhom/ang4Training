import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-try-input',
  templateUrl: './try-input.component.html',
  styleUrls: ['./try-input.component.css']
})
export class TryInputComponent implements OnInit {
numbers;
  constructor(private dataService: DataService ) { }




  ngOnInit() {
    this.numbers = this.dataService.getData();
  }
  sendNumber() {
    this.dataService.setData(this.numbers);
  }

}
