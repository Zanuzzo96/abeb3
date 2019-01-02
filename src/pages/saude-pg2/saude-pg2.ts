import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg3Page } from '../saude-pg3/saude-pg3';


/**
 * Generated class for the SaudePg2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg2',
  templateUrl: 'saude-pg2.html',
})
export class SaudePg2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg2Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg3Page)
  }
}
