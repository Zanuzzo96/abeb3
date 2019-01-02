import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg13Page} from '../saude-pg13/saude-pg13';
/**
 * Generated class for the SaudePg12Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg12',
  templateUrl: 'saude-pg12.html',
})
export class SaudePg12Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg12Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg13Page)
  }

}
