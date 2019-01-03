import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeCaminhadaPage } from '../se-caminhada/se-caminhada';

@IonicPage()
@Component({
  selector: 'page-se-caminha',
  templateUrl: 'se-caminha.html',
})
export class SeCaminhaPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  caminha: any;
  cliente:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeCaminhaPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.caminha);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeCaminhadaPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente
      
    })
  }

}
