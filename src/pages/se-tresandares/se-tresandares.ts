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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTresandaresPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.tresandares);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTrabalhoPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente
      
    })
  }

}
