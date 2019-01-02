import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AIncluirrcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-incluirrc',
  templateUrl: 'a-incluirrc.html',
})
export class AIncluirrcPage {

  rc = "";
  rcs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AIncluirrcPage');
  }

  incluir() {
    console.log(this.rc);
    this.rcs.push(this.rc);
  }
}
