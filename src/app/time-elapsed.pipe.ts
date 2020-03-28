import { Pipe, PipeTransform, Input } from '@angular/core';
import { Quotes } from './quotes/quotes';


@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  @Input() quotes:Quotes;

  transform(value: any): number {
    const secs = 60;
    const min = (secs * 60);
    // let postedTime = this.quotes.timePosted;
    let current : Date = new Date();
    let currentTime : any = new Date( current.getMinutes(), current.getSeconds());
    let timelapsed = Math.floor( currentTime - value);
    let timeInSecs = (timelapsed*0.0001);

  if (timeInSecs < 60){
    return timeInSecs;
  }else if (timeInSecs > 60){
    let inMin = (timeInSecs/secs);
    return inMin;
  }else if (timeInSecs > 3600){
    let inHours = (timeInSecs/min);
    return inHours;
  }
 }
}
