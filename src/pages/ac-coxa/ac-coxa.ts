import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcPanturilhaPage } from '../ac-panturilha/ac-panturilha';

/**
 * Generated class for the AcCoxaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-coxa',
  templateUrl: 'ac-coxa.html',
})
export class AcCoxaPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcCoxaPage');
  }

  continuar(){
    this.navCtrl.push(AcPanturilhaPage)
  }

}
