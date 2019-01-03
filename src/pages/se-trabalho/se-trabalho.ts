import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeAtividadesdomesticasPage } from '../se-atividadesdomesticas/se-atividadesdomesticas';

/**
 * Generated class for the SeTrabalhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-trabalho',
  templateUrl: 'se-trabalho.html',
})
export class SeTrabalhoPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  trabalho: any;
  cliente:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTrabalhoPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.trabalho);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeAtividadesdomesticasPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente

    });
  }

}
