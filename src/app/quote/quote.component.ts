
import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Your time is limited', 'so dont waste it living someone elses life', new Date(2020, 7, 21)),
    new Quote(2, 'If you look at what you have in life', 'you will always  have more', new Date(2019, 3, 19)),
    new Quote(3, 'Life is what happens', 'when you are busy making other plans', new Date(2020, 8, 10)),
    new Quote(4, 'The way to get started', 'is to quit talking and begin doing', new Date(2020, 1, 31)),
    new Quote(5, 'If life were predictable it would cease',  'to be life,and be without flavor', new Date(2020, 10, 20)),
  ];

  // tslint:disable-next-line: typedef
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  // tslint:disable-next-line: typedef
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
