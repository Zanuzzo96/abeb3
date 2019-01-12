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
  tratamento:any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.tratamento = this.navParams.get('tratamento');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTrabalhoPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  continuar(){
    let soma = parseFloat(this.trabalho);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeAtividadesdomesticasPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    });
  }

}
