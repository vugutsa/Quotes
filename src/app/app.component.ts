import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quote = 'any quote of your choice';


  quotes  : string[];

  constructor(){
    this.quotes = ['Your time is limited', 'If you look at what you have in life', 'Life is what happens'];
  }
}
