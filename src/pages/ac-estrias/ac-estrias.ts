import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcPosturaisPage } from '../ac-posturais/ac-posturais';

@IonicPage()
@Component({
  selector: 'page-ac-estrias',
  templateUrl: 'ac-estrias.html',
})
export class AcEstriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcEstriasPage');
  }

  continuar(){
    this.navCtrl.push(AcPosturaisPage)
  }

}
