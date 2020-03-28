import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  latestPost = new Quotes (0, "", "", 0, 0, "03 s");

  @Output() newQuote = new EventEmitter<Quotes>();

  postNewQuote (){
    if (this.latestPost.author === ""){
      alert("The author field must be filled!");
    }
    else if (this.latestPost.actQuote === ""){
      alert("The quote field must be filled!");
    }
    else{
      this.newQuote.emit(this.latestPost);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
