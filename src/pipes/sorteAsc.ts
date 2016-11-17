import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'sorteAsc',
  pure: false
})
@Injectable()
export class SorteAsc {

  transform(value: any[], args:string="name") {
   return value.sort(
     (a,b) => {
       if(a[args] < b[args]) return -1;
       if(a[args] > b[args]) return 1;
       return 0;
     })
  }
}
