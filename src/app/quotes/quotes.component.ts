import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, "William Shakespeare", "And as imagination bodies forth, the forms of things unknown, the poet’s pen turns them to shapes and gives to airy nothing a local habitation and a name.", 10, 3, "1 Week Ago"),
    new Quotes(2, "Somerset Maugham", "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.", 7, 19, "2 Days Ago"),
    new Quotes(3, "Abraham Lincon", "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves", 17, 8, "7 Hours Ago")
  ];

  toggleDetails(index){
    this.quotes[index].additionalInfo = !this.quotes[index].additionalInfo;
  }


  postedNewQuote(latestQuote){

    latestQuote.id = (this.quotes.length + 1);
    latestQuote.upVote = 0;
    latestQuote.downVote = 0;
    latestQuote.timePosted = latestQuote.timePosted;
    this.quotes.push(latestQuote);
  }

  deleteQuote(index){
    let toDelete = confirm('Are you sure you want to delete this quote? This action cannot be reversed!');
    if (toDelete){
      this.quotes.splice(index, 1);
    }else{
      alert("Pheew! Your quote remains")
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
