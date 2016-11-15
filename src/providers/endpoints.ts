import { Injectable } from '@angular/core';

@Injectable()
export class Endpoints {

API_PATH: string = "http://ionic-places-jwt.herokuapp.com";

getLogin(): string {
  return this.API_PATH + '/sessions/create';
}

getSignup(): string {
  return this.API_PATH + '/users';
}

}
