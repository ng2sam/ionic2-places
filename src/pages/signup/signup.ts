import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ViewController, NavController, ModalController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';
import { Auth } from '../../providers/auth';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  authInfo: {
    username:string,
    password:string
  } = {
    username:'',
    password:''
  };


  constructor(public viewCtrl: ViewController, public navCtrl: NavController, private _auth: Auth) {}

  close(){
    this.viewCtrl.dismiss();
  }

  signUp() : void {
    console.log(this.authInfo);
    this._auth.signup(this.authInfo)
    .subscribe(
      (data) => console.log(data),
      (err) => console.log(err),
      () => this.navCtrl.setRoot(Routes.getPage(Routes.TABS))
    );
  }

}
