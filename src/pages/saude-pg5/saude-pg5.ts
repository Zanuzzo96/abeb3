import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg6Page } from '../saude-pg6/saude-pg6';

/**
 * Generated class for the SaudePg5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg5',
  templateUrl: 'saude-pg5.html',
})
export class SaudePg5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg5Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg6Page);
  }

}
