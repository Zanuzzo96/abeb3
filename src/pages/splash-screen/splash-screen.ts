import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

  constructor(public navCtrl: NavController){}

  ionViewDidLoad(){
    let tempoSplashScreen = 10000;
    setTimeout(() => {this.navCtrl.push(HomePage)}, tempoSplashScreen);
  }

}

//VER ESSE VIDEO https://www.youtube.com/watch?v=LLADN_R8I1k
