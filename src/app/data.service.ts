import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {


  constructor(private http: Http) { }

  // fetchData() {
  //   console.log('fetch');
  //   return this.http.get('/cars.json').subscribe(
  //     (data) => console.log('Hi')
  //   );
  // }

  // fetchData () {
  //   this.http.get('/cars.json').map(
  //     (res) => res.json()
  //   ).subscribe(
  //     (data) => console.log(data)
  //   );
  // }
 numbers  = 1;
  fetchData () {
    return this.http.get('./assets/cars.json').map(
      (res) => res.json()
    );
  }

  getData() {
    return this.numbers;
  }
  setData(value) {
    this.numbers = value;
  }


}
