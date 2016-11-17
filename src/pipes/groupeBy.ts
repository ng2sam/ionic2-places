import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/groupBy';
/*
  Generated class for the GroupeBy pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'groupeBy'
})
@Injectable()
export class GroupeBy {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value:any[], args:string="name") {
   let result = [];
   console.log(value);
   Observable.from(value).groupBy(
     (item:any) =>{ console.log(item); return item[args].substring(0,1)},
     (item:any)=> item
    )
    .flatMap(
      (groupe:any)=>groupe.toArray()
    )
    .subscribe(
      (res) => result.push({value:res[0][args].substring(0,1), list:res})
    );
    console.log(result);
    return result;
  }
}
