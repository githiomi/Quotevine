import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  latestPost = new Quotes (0, "", "", 0, 0, new Date(Date.now()));

  @Output() newQuote = new EventEmitter<Quotes>();

  postNewQuote (){
    if (this.latestPost.author == "" && this.latestPost.actQuote == ""){
      alert("You must fill the author and quote fields to post!");
    }else{
    this.newQuote.emit(this.latestPost);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
