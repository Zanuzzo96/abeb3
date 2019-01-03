import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcEdemaPage } from '../ac-edema/ac-edema';

@IonicPage()
@Component({
  selector: 'page-ac-hldg',
  templateUrl: 'ac-hldg.html',
})
export class AcHldgPage {

  sexo = this.navParams.get('sexo');
  cliente = this.navParams.get('cliente');

  public hldg={
    "tipo":"",
    "grau":"",
    "local":"",
    "coloracao":"",
    "temp":"",
    "palpacao":"",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcHldgPage',this.cliente);
  }

  continuar(){
    console.log(this.hldg);
    this.navCtrl.push(AcEdemaPage,{
      sexo: this.sexo,
      cliente: this.cliente,
      hldgTipo: this.hldg.tipo,
      hldgGrau: this.hldg.grau,
      hldgLocal: this.hldg.local,
      hldgColoracao: this.hldg.coloracao,
      hldgTemp: this.hldg.temp,
      hldgPalpacao: this.hldg.palpacao
    })
  }

}
