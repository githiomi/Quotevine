import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  latestPost = new Quotes (0, "", "", 0, 0);

  @Output() newQuote = new EventEmitter<Quotes>();

  postNewQuote (){
    this.newQuote.emit(this.latestPost);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
