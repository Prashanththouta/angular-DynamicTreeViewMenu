import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  divsData;

  constructor() {
    this.divsData = [
      {label: "Date"},
      {label: "Branch"},
      {label: "Location"},
      {label: "Party"}
    ];
  }
}
