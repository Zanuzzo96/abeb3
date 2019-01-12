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
  tratamento: any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.tratamento = this.navParams.get('tratamento');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeDuracaoesportePage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);

  }

  continuar(){
    let soma = parseFloat(this.duracao);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeCaminhaPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    })
  }

}
