import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeTrabalhoPage } from '../se-trabalho/se-trabalho';

@IonicPage()
@Component({
  selector: 'page-se-tresandares',
  templateUrl: 'se-tresandares.html',
})
export class SeTresandaresPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  tresandares: any;
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
    console.log('ionViewDidLoad SeTresandaresPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);

  }

  continuar(){
    let soma = parseFloat(this.tresandares);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTrabalhoPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    })
  }

}
