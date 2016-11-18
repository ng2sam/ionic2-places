import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Settings provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Settings {
  public settings: {name:string, value:boolean}[] = [
    {name:'Geolocalisation', value:true},
    {name: 'Contact', value:false}
  ];
  constructor(public http: Http) {}

  getSettings(): {name:string, value:boolean}[] {
    return this.settings;
  }
}
