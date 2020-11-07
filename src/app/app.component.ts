import { Quote } from './quote';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quote = 'any quote of your choice';

  // quotes: Quote[] = [
  //   {id: 1, name: 'Your time is limited'},
  //   {id: 2, name: 'If you look at what you have in life'},
  //   {id: 3, name: 'Life is what happens'},
  //   {id: 4, name: 'The way to get started'},
  //   {id: 5, name: 'If life were predictable it would cease'},
  // ];
  // quotes  : string[];

  // constructor(){
  //   this.quotes = ['Your time is limited', 'If you look at what you have in life', 'Life is what happens'];
  // }
}
