import { Pipe, PipeTransform, Input } from '@angular/core';
import { Quotes } from './quotes/quotes';


@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  @Input() quotes:Quotes; 
  @Input() latestQuote:Quotes;

  transform(_value : any) {
   
      const secs = 60;
      let current = parseInt(this.latestQuote.timePosted);
      let seconds = current + 1;

      if (seconds < 10){
         return "0" + seconds +" s";
      }

      if( seconds > 10 && seconds < 60){
        return seconds +" s";
      }else if(seconds > 60){
        let inMin = (seconds/secs);
        return Math.floor(inMin) +" min";
      }else{
        return "too long";
      }
  }
}    