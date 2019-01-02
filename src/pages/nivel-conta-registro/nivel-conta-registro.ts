import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegistroClientePage } from '../registro-cliente/registro-cliente';
import { ValidacaoRegistroNivelProfCadastroPage } from '../validacao-registro-nivel-prof-cadastro/validacao-registro-nivel-prof-cadastro';


@IonicPage()
@Component({
  selector: 'page-nivel-conta-registro',
  templateUrl: 'nivel-conta-registro.html',
})
export class NivelContaRegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NivelContaRegistroPage');
  }

  usuario() {
    this.navCtrl.push(RegistroClientePage);
  }

  profissional() {
    this.navCtrl.push(ValidacaoRegistroNivelProfCadastroPage);
  }

}
