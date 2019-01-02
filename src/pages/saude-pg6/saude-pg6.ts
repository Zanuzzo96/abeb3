import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg7Page } from '../saude-pg7/saude-pg7';

/**
 * Generated class for the SaudePg6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg6',
  templateUrl: 'saude-pg6.html',
})
export class SaudePg6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg6Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg7Page)
  }

}
