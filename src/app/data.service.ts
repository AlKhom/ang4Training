import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {


  constructor(private http: Http) { }

 numbers  = 1;
  fetchData () {
    // return this.http.get('https://angular4tutorial-fc1b2.firebaseio.com/.json').map(
    //   (res) => res.json()
    // );
  }

  getData() {
    return this.numbers;
  }
  setData(value) {
    this.numbers = value;
  }


}
