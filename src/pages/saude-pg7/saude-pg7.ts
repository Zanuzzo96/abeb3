import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg8Page } from '../saude-pg8/saude-pg8';

/**
 * Generated class for the SaudePg7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg7',
  templateUrl: 'saude-pg7.html',
})
export class SaudePg7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg7Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg8Page)
  }

}
