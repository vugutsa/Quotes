
import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Your time is limited', 'so dont waste it living someone elses life', new Date(2020, 4 , 29)),
    new Quote(2, 'If you look at what you have in life', 'you will always  have more', new Date(2020, 7, 21)),
    new Quote(3, 'Life is what happens', 'when you are busy making other plans', new Date(2020, 7, 30)),
    new Quote(4, 'The way to get started', 'is to quit talking and begin doing', new Date(2020, 2, 18)),
    new Quote(5, 'If life were predictable it would cease',  'to be life,and be without flavor', new Date(2020, 3, 19)),
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

  // tslint:disable-next-line: typedef
  // deleteQuote(isComplete, index){
  //   if (isComplete) {
  //     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

  //     if (toDelete){
  //       this.quotes.splice(index, 1);
  //     }
  //   }
  // }

  // quotes: Quote[] = [
  //   {id: 1, name: 'Your time is limited','so dont waste it living someone elses life'),
  //   {id: 2, name: 'If you look at what you have in life', description: 'you will always  have more'},
  //   {id: 3, name: 'Life is what happens', description: 'when you are busy making other plans'},
  //   {id: 4, name: 'The way to get started', description: 'is to quit talking and begin doing'},
  //   {id: 5, name: 'If life were predictable it would cease', description: 'to be life,and be without flavor'},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
