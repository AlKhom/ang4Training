import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  person12 = {
    firstName : 'John',
  lastName : 'Woo'
  };
  dataFromChild;

  section = 'this is section';

 user = {
   name: 'Mister1',
   surname: 'Smith1'
 };
  nameFromRoot(e) {
    this.dataFromChild = e;
  }
  alertData() {
    alert(this.dataFromChild);
  }
}
