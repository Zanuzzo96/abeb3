import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeDuracaoesportePage } from '../se-duracaoesporte/se-duracaoesporte';

@IonicPage()
@Component({
  selector: 'page-se-esporte',
  templateUrl: 'se-esporte.html',
})
export class SeEsportePage {

  esporte : any;
  pontuacao : number = parseFloat(this.navParams.get('pontuacao')) ;
  cliente:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeEsportePage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.esporte);

    this.pontuacao += soma;
    console.log(this.pontuacao);
    this.navCtrl.push(SeDuracaoesportePage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente
    });
  }

}
