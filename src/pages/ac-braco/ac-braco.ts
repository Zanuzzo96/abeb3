import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcAbdomenPage } from '../ac-abdomen/ac-abdomen';

/**
 * Generated class for the AcBracoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-braco',
  templateUrl: 'ac-braco.html',
})
export class AcBracoPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcBracoPage');
  }

  continuar(){
    this.navCtrl.push(AcAbdomenPage)
  }

}
