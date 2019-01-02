import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg12Page} from  '../saude-pg12/saude-pg12';
/**
 * Generated class for the SaudePg11Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saude-pg11',
  templateUrl: 'saude-pg11.html',
})
export class SaudePg11Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg11Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg12Page)
  }

}
