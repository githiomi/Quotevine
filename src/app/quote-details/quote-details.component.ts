import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes/quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes: Quotes;

  addUpVote(){
    this.quotes.upVote += 1;
  }

  addDownVote(){
    this.quotes.downVote +=1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}