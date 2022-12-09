import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  entity : string;
  endpointPrefix : string;

  constructor() {
    this.title = 'Interest rate module';
    this.entity = 'Interest rate';
    this.endpointPrefix = '/interestRate';
  }
}
