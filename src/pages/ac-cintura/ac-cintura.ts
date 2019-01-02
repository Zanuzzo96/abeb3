import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcQuadrilPage } from '../ac-quadril/ac-quadril';

/**
 * Generated class for the AcCinturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-cintura',
  templateUrl: 'ac-cintura.html',
})
export class AcCinturaPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcCinturaPage');
  }

  continuar(){
    this.navCtrl.push(AcQuadrilPage)
  }

}
