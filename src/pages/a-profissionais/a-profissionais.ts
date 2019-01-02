import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AIncluirrcPage } from '../a-incluirrc/a-incluirrc';


@IonicPage()
@Component({
  selector: 'page-a-profissionais',
  templateUrl: 'a-profissionais.html',
})
export class AProfissionaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AProfissionaisPage');
  }

  adicionarrc(){
    this.navCtrl.push(AIncluirrcPage)
  }

}
