import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcCinturaPage } from '../ac-cintura/ac-cintura';

/**
 * Generated class for the AcAbdomenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-abdomen',
  templateUrl: 'ac-abdomen.html',
})
export class AcAbdomenPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcAbdomenPage');
  }

  continuar(){
    this.navCtrl.push(AcCinturaPage)
  }

}
