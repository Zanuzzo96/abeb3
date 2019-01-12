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
  tratamento:any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.tratamento = this.navParams.get('tratamento');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeEsportePage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);

  }

  continuar(){
    let soma = parseFloat(this.esporte);

    this.pontuacao += soma;
    console.log(this.pontuacao);
    this.navCtrl.push(SeDuracaoesportePage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    });
  }

}
