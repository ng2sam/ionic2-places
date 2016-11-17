import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import { Endpoints } from './endpoints';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class Auth {
  contentHeader: Headers = new Headers({'Content-Type':'application/json'});
  jwtHelper: JwtHelper = new JwtHelper();
  storage:Storage = new Storage();
  user:string;
  error:string;


  constructor(private _http: Http, private _endpts: Endpoints) {
    console.log('Hello Auth Provider',this._endpts.getSignup());
    this.storage.get('id_token').then(
      token => {
        let token_id = token.id_token;
        this.setUser(token_id);
        return token_id;
      }).catch(
      error => this.error = error
      )
  }

  signup (authInfo :{username:string, password:string}): Observable<string> {

    return this._http.post(this._endpts.getSignup(), 
          JSON.stringify(authInfo), {headers: this.contentHeader})
          .map((res) => {
            let token = res.json();
            this.authSuccess(token.id_token);
            return token.id_token;
          });
  }

  signin (authInfo:{username:string, password:string}): Observable<any> {

    return this._http.post(this._endpts.getLogin(), 
          JSON.stringify(authInfo), {headers: this.contentHeader})
          .map((res) => {
            let token = res.json();
            this.authSuccess(token.id_token);
            return token.id_token;
          });
  } 

  setUser(token: string): void {
    this.user = this.jwtHelper.decodeToken(token);
  }

  authSuccess(token: string): void {
    this.storage.set('id_token',token);
    this.setUser(token);
  }

}
