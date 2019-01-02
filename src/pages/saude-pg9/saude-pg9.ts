import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg10Page } from '../saude-pg10/saude-pg10';
/**
 * Generated class for the SaudePg9Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg9',
  templateUrl: 'saude-pg9.html',
})
export class SaudePg9Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg9Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg10Page)
  }

}
