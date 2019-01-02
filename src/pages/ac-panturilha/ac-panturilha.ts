import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcConcluidoPage } from '../ac-concluido/ac-concluido';

/**
 * Generated class for the AcPanturilhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-panturilha',
  templateUrl: 'ac-panturilha.html',
})
export class AcPanturilhaPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcPanturilhaPage');
  }

  continuar(){
    this.navCtrl.push(AcConcluidoPage)
  }

}
