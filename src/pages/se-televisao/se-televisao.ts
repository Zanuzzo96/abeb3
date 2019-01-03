import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeResultadoPage } from '../se-resultado/se-resultado';

/**
 * Generated class for the SeTelevisaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-televisao',
  templateUrl: 'se-televisao.html',
})
export class SeTelevisaoPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  televisao: any;
  cliente:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTelevisaoPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.televisao);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeResultadoPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente
      
    });
  }

}
