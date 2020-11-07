
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


  // quotes: Quote[] = [
  //   {id: 1, name: 'Your time is limited', description: 'so dont waste it living someone elses life'},
  //   {id: 2, name: 'If you look at what you have in life', description: 'you will always  have more'},
  //   {id: 3, name: 'Life is what happens', description: 'when you are busy making other plans'},
  //   {id: 4, name: 'The way to get started', description: 'is to quit talking and begin doing'},
  //   {id: 5, name: 'If life were predictable it would cease', description: 'to be life,and be without flavor'},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
