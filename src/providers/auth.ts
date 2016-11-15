import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import { Endpoints } from './endpoints';


@Injectable()
export class Auth {
  contentHeader: Headers = new Headers({'Content-Type':'application/json'});
  jwtHelper:JwtHelper = new JwtHelper();
  storage:Storage = new Storage;
  user:string;
  error:string;


  constructor(private _http: AuthHttp, private _endpts: Endpoints) {
    console.log('Hello Auth Provider');
    this.storage.get('id_token').then(
      (token) => this.setUser(token)
    ).catch(
      (error)=>console.log(error)
      )
  }

  signup (authInfo:{username:string, password:string}): void {
    this._http.post(this._endpts.getSignup(), 
    JSON.stringify(authInfo), 
    {headers: this.contentHeader})
    .map((res) => {
      let token = res.json();
      this.authSuccess(token);
      return token;
    })
  }

  setUser(token: string) :void {
    this.user = this.jwtHelper.decodeToken(token);
  }

  authSuccess(id_token: string) :void {
    this.storage.set('id_token',id_token);
    this.setUser(id_token);
  }

}
