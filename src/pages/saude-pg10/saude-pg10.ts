import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg11Page} from '../saude-pg11/saude-pg11';

/**
 * Generated class for the SaudePg10Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg10',
  templateUrl: 'saude-pg10.html',
})
export class SaudePg10Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg10Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg11Page)
  }

}
