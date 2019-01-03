import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeEsportePage } from '../se-esporte/se-esporte';


@IonicPage()
@Component({
  selector: 'page-se-energia',
  templateUrl: 'se-energia.html',
})
export class SeEnergiaPage {

  energia : any;
  cliente:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeEnergiaPage');
    console.log("cliente",this.cliente);
  }

  continuar(){
    this.navCtrl.push(SeEsportePage,{
      pontuacao: this.energia,
      cliente: this.cliente
    })
  }

}
