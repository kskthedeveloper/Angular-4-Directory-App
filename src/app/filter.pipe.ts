import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(people: any, term: any): any {
    // tslint:disable-next-line:curly
    if (term === undefined) return people;

    return people.filter(function(person){
      return person.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
