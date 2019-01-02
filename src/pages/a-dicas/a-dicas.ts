import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AAdicionardicaPage } from '../a-adicionardica/a-adicionardica';

/**
 * Generated class for the ADicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-dicas',
  templateUrl: 'a-dicas.html',
})
export class ADicasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ADicasPage');
  }

  adicionar(){
    this.navCtrl.push(AAdicionardicaPage)
  }

}
