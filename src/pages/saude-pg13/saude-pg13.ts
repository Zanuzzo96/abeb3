import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg14Page } from '../saude-pg14/saude-pg14';
/**
 * Generated class for the SaudePg13Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg13',
  templateUrl: 'saude-pg13.html',
})
export class SaudePg13Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg13Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg14Page)
  }

}
