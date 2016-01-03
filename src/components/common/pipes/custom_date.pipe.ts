import {Pipe} from 'angular2/core';

declare var moment: any;

@Pipe({ 
  name: 'customDate' 
})
export class CustomDatePipe {

  transform(date:string, args:string[] = []):string {
    return moment(date).format(args[0] || 'DD/MM/YYYY');
  }

}