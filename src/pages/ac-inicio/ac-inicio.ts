import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcHldgPage } from '../ac-hldg/ac-hldg';
import { PSessoesPage } from '../p-sessoes/p-sessoes';

@IonicPage()
@Component({
  selector: 'page-ac-inicio',
  templateUrl: 'ac-inicio.html',
})
export class AcInicioPage {

  public sexo = "M";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcInicioPage');
  }

  continuar(){
    this.navCtrl.push(AcHldgPage)
  }

  voltar(){
    this.navCtrl.push(PSessoesPage)
  }



}
