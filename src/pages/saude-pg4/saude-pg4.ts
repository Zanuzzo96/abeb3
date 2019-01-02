import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg5Page } from '../saude-pg5/saude-pg5';


/**
 * Generated class for the SaudePg4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg4',
  templateUrl: 'saude-pg4.html',
})
export class SaudePg4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg4Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg5Page)
  }

}
