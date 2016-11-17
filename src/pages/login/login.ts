import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';
import { Auth } from '../../providers/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  authInfo: {
    username:string,
    password:string
  } = {
    username:'',
    password:''
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private _auth: Auth) {}

  goTabs(): void {
    this.navCtrl.push(Routes.getPage(Routes.TABS));
  }

  openSignup(): void {
    let modal = this.modalCtrl.create(Routes.getPage(Routes.SIGNUP));
    modal.present();
  }

  signIn(): void {
    console.log(this.authInfo);
    this._auth.signin(this.authInfo)
    .subscribe(
      (data) => console.log('Login Ok',data),
      (err) => console.log(err),
      () => this.navCtrl.setRoot(Routes.getPage(Routes.TABS)),
    );
  }

}
