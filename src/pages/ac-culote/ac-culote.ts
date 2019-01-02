import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcCoxaPage } from '../ac-coxa/ac-coxa';

/**
 * Generated class for the AcCulotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-culote',
  templateUrl: 'ac-culote.html',
})
export class AcCulotePage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcCulotePage');
  }

  continuar(){
    this.navCtrl.push(AcCoxaPage)
  }

}
