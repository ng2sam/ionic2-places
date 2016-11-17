import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import { Endpoints } from './endpoints';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Auth } from './auth'

@Injectable()
export class Places {

  contentHeader: Headers = new Headers({'Content-Type':'application/json'});
  jwtHelper: JwtHelper = new JwtHelper();
  storage:Storage = new Storage();
  user:string;
  error:string;

  constructor(private _http: AuthHttp, private _endpts: Endpoints, private _auth: Auth) {
    console.log('Hello Auth Provider',this._endpts.getSignup());
    this.storage.get('id_token').then(
      token => {
        let token_id = token.id_token;
        this._auth.setUser(token_id);
        return token_id;
      }).catch(
      error => this.error = error
      )
  }

  getPlaces (): Observable<string[]> {

    return this._http.get(this._endpts.getPlaces(), 
          {headers: this.contentHeader})
          .map((res) => {
            let d = res.json();
            return d;
          });
  }


}
