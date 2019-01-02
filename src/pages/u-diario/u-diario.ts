import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UHomePage } from '../u-home/u-home';
import { DiarioDiaPage } from '../diario-dia/diario-dia';

@IonicPage()
@Component({
  selector: 'page-u-diario',
  templateUrl: 'u-diario.html',
})
export class UDiarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UDiarioPage');
  }

  iniciar(){
    this.navCtrl.push(DiarioDiaPage)
  }

  voltar(){
    this.navCtrl.push(UHomePage)
  }

}
