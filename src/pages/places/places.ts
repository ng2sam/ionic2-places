import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Places } from '../../providers/places';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  places:Observable<string[]>; //ici interface

  constructor(public navCtrl: NavController, private _placeService: Places) {}

  ionViewDidLoad() {
    console.log('Hello PlacesPage Page');
    this.places = this._placeService.getPlaces();
    /*.subscribe(
      (data) => this.places = data,
      (err)=>console.log(err),
      ()=>console.log('end list places')
    );*/
  }

}
