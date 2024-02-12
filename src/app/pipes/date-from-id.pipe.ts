import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFromID',
  standalone: true
})


export class DateFromIDPipe implements PipeTransform {


  transform(idNumber: string, datePart: string): string {
    
    // Validate input and extract birthdate from the ID number
    if (!idNumber) {
      return '';
    }
    
    // 29303212602436
    let year = idNumber.slice(1, 3);

    let firstIndex = idNumber[0];

    if(firstIndex == "2") {
      year =  "19" + year;
    } else if (firstIndex == "3"){
      year =  "20" + year;
    } else {
      console.log("cannot generate full date");
      
    }

    const month = idNumber.slice(3, 5);
    const day = idNumber.slice(5, 7);
    const birthDate = new Date(`${year}-${month}-${day}`);

    // Format the date based on the specified date part
    switch (datePart) {
      case 'YY':
        return year;
      case 'MM':
        return month;
      case 'DD':
        return day;
      case 'FullDate':
        return `${day}-${month}-${birthDate.getFullYear()}`;
      default:
        return '';
    }
  }


}
