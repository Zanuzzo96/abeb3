import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashScreenPage');

    let TIME_IN_MS = 10000;
    let hideFooterTimeout = setTimeout( () => {
         console.log('teste');
         this.navCtrl.push(HomePage);
    }, TIME_IN_MS);

  }

}

//VER ESSE VIDEO https://www.youtube.com/watch?v=LLADN_R8I1k
