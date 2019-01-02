import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcBracoPage } from '../ac-braco/ac-braco';

/**
 * Generated class for the AcBustoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-busto',
  templateUrl: 'ac-busto.html',
})
export class AcBustoPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcBustoPage');
  }

  continuar(){
    this.navCtrl.push(AcBracoPage)
  }

}
