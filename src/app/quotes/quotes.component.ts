import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, "William Shakespeare", "And as imagination bodies forth, the forms of things unknown, the poet’s pen turns them to shapes and gives to airy nothing a local habitation and a name.", 10, 3),
    new Quotes(2, "Somerset Maugham", "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.", 7, 19),
    new Quotes(3, "Abraham Lincon", "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves", 17, 8)
  ];

  toggleDetails(index){
    this.quotes[index].additionalInfo = !this.quotes[index].additionalInfo;
  }

  postNewQuote(latestQuote){
    latestQuote.id = (this.quotes.length + 1);
    latestQuote.upVote = 0;
    latestQuote.downVote = 0;
    this.quotes.push(latestQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
