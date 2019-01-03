import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeCaminhaPage } from '../se-caminha/se-caminha';

@IonicPage()
@Component({
  selector: 'page-se-duracaoesporte',
  templateUrl: 'se-duracaoesporte.html',
})
export class SeDuracaoesportePage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  duracao: any;
  cliente:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeDuracaoesportePage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.duracao);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeCaminhaPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente
    })
  }

}
