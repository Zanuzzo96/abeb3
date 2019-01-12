import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeTelevisaoPage } from '../se-televisao/se-televisao';

/**
 * Generated class for the SeSentadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-sentado',
  templateUrl: 'se-sentado.html',
})
export class SeSentadoPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  sentado: any;
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
    console.log('ionViewDidLoad SeSentadoPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  continuar(){
    let soma = parseFloat(this.sentado);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTelevisaoPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    });
  }

}
