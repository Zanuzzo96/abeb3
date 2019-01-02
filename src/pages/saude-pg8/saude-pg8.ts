import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg9Page } from '../saude-pg9/saude-pg9';

/**
 * Generated class for the SaudePg8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg8',
  templateUrl: 'saude-pg8.html',
})
export class SaudePg8Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg8Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg9Page)
  }

}
