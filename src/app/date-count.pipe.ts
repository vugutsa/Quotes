import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any): number {
     // tslint:disable-next-line: prefer-const
    let today: Date = new Date(); // get current date and time
     // tslint:disable-next-line: prefer-const
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
     // tslint:disable-next-line: prefer-const
    let dateDifference = Math.abs(value - todayWithNoTime) ;  // returns value in miliseconds
     // tslint:disable-next-line: prefer-const
    const secondsInDay = 86400; // 60 seconds * 60 minutes in an hour * 24 hours in a day
    // tslint:disable-next-line: prefer-const
    let dateDifferenceSeconds = dateDifference * 0.001; // converts miliseconds to seconds
     // tslint:disable-next-line: prefer-const
    let dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
