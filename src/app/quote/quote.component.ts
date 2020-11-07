
import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Your time is limited', 'so dont waste it living someone elses life'),
    new Quote(2, 'If you look at what you have in life', 'you will always  have more'),
    new Quote(3, 'Life is what happens', 'when you are busy making other plans'),
    new Quote(4, 'The way to get started', 'is to quit talking and begin doing'),
    new Quote(5, 'If life were predictable it would cease',  'to be life,and be without flavor'),
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
