import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg2Page } from '../saude-pg2/saude-pg2';


/**
 * Generated class for the SaudePg1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg1',
  templateUrl: 'saude-pg1.html',
})
export class SaudePg1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg1Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg2Page)
  }

}
