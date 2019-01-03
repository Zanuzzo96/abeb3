import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcHldgPage } from '../ac-hldg/ac-hldg';
import { ProfissionalPage } from '../profissional/profissional';

@IonicPage()
@Component({
  selector: 'page-ac-inicio',
  templateUrl: 'ac-inicio.html',
})
export class AcInicioPage {

  sexo = this.navParams.get('sexo');
  cliente = this.navParams.get('user');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.sexo)
    console.log(this.cliente)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcInicioPage', this.cliente);
  }

  continuar(){
    this.navCtrl.push(AcHldgPage,{
      sexo: this.sexo,
      cliente: this.cliente
    })
  }

  voltar(){
    this.navCtrl.push(ProfissionalPage)
  }



}
