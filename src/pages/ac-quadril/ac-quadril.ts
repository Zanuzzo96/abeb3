import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcCulotePage } from '../ac-culote/ac-culote';

/**
 * Generated class for the AcQuadrilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-quadril',
  templateUrl: 'ac-quadril.html',
})
export class AcQuadrilPage {
  
  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcQuadrilPage');
  }

  continuar(){
      this.navCtrl.push(AcCulotePage)
  }

}
