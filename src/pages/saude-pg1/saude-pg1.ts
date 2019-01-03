import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg2Page } from '../saude-pg2/saude-pg2';

@IonicPage()
@Component({
  selector: 'page-saude-pg1',
  templateUrl: 'saude-pg1.html',
})
export class SaudePg1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cliente = this.navParams.get('id');
  sexo = this.navParams.get('sexo');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg1Page', this.cliente + this.sexo);
  }

  continuar(){
    this.navCtrl.push(SaudePg2Page)
  }

}
