import { Component } from '@angular/core';

@Component({
  selector: 'map',
  template: "<div id='map_canvas'></div>"
})
export class Map {
 private map:any;
 

  init(lat:number, long:number, zoom:number=12) {

   /* this.map = new google.maps.Map(document.getElementById("map_canvas"), {
          center: new google.maps.LatLng(lat, long),
          zoom: zoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP
     });*/

  }

}
