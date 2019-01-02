import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg4Page } from '../saude-pg4/saude-pg4';


@IonicPage()
@Component({
  selector: 'page-saude-pg3',
  templateUrl: 'saude-pg3.html',
})
export class SaudePg3Page {

  antecendentesCirurgicos: any = 'não';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg3Page');
  }

  continuar(){
    this.navCtrl.push(SaudePg4Page)
  }

}
