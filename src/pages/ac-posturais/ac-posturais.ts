import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcBustoPage } from '../ac-busto/ac-busto';

/**
 * Generated class for the AcPosturaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-posturais',
  templateUrl: 'ac-posturais.html',
})
export class AcPosturaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcPosturaisPage');
  }

  continuar(){
    this.navCtrl.push(AcBustoPage)
  }

}
