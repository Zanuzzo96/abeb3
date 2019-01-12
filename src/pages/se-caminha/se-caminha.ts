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
  tratamento:any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.tratamento = this.navParams.get('tratamento');

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
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    })
  }

}
