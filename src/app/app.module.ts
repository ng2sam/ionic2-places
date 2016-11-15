import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HeaderContentComponent } from '../components/header-content/header-content';
import { Routes } from './app.routes';
import {AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/Http';
import { Storage } from '@ionic/storage';


const app:Array<any>=[MyApp];
const pages:Array<any> = Routes.getPages();
const components:Array<any> = [
  HeaderContentComponent,
];
const appIonicConfig = {
  mode: 'md',
  platforms: {
    ios: {
      tabsPlacement: 'top',
    }
  }
};
let storage = new Storage();
export function getAuthHttp(Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'jwt',
    noJwtError: false,
   globalHeaders:[{'accepte':'application/json'}],
   tokenGetter: (()=>storage.get('id_token')),
  }), Http);
}
@NgModule({
  declarations: app.concat(pages).concat(components),
  imports: [
    IonicModule.forRoot(MyApp,appIonicConfig, Routes.getDeepLinkerConfig())
  ],
  bootstrap: [IonicApp],
  entryComponents: app.concat(pages),
  providers :[{
    provide : AuthHttp,
    useFactory: getAuthHttp,
    deps:[Http]
  }]
})
export class AppModule {}
