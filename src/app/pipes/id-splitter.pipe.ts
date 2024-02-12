import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idSplitter',
  standalone: true
})

export class IdSplitterPipe implements PipeTransform {

  transform(userNationalID:string) :string {
    let result:string = "";
    
    // using regular expression

    // result = userNationalID.replace(/(.{4})/g, '$1 - ').trim();


    // using for loop
    for (let i = 0; i < userNationalID.length; i++) {

      if ((i + 1) % 4 == 0) {
        result += ' - ';
      }

      result += userNationalID[i];

    }
    return result;
  }
}
