import { Pipe, PipeTransform, Input } from '@angular/core';
import { Quotes } from './quotes/quotes';


@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  @Input() quotes:Quotes;

  transform(_value : any) {
   
      const secs = 60;
      let current = new Date();
      let seconds = current.getSeconds();
      let timeRn : any = seconds;
        
      if (timeRn < 10){
         return "0" + timeRn +" s";
      }

      if( timeRn > 10 && timeRn < 60){
        return timeRn +" s";
      }else if(timeRn > 60){
        let inMin = (timeRn/secs);
        return Math.floor(inMin) +" min";
      }else{
        return "too long";
      }
  }
}    