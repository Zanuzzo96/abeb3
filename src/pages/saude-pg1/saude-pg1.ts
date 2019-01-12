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

  cliente = this.navParams.get('user');
  sexo = this.navParams.get('sexo');
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg1Page', this.cliente + this.sexo);
  }

  profissao: any;
  muitotemposentado: any;

  continuar(){
    this.navCtrl.push(SaudePg2Page,{
      cliente: this.cliente,
      sexo: this.sexo,
      profissao: this.profissao,
      muitotemposentado: this.muitotemposentado,
      tratamento: this.tratamento,
      data:this.data,
      hora:this.hora,
    })
  }

}
