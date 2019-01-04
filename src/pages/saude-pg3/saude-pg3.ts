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

  cliente = this.navParams.get('cliente');
  sexo = this.navParams.get('sexo');
  profissao = this.navParams.get('profissao');
  muitotemposentado = this.navParams.get('muitotemposentado');
  qualidadesono = this.navParams.get('qualidadesono');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg3Page');
    console.log(this.cliente);
    console.log(this.sexo);
    console.log(this.profissao);
    console.log(this.muitotemposentado);
    console.log(this.qualidadesono);
  }

  continuar(){
    this.navCtrl.push(SaudePg4Page)
  }

}
