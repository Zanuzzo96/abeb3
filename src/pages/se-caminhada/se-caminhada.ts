import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeTresandaresPage } from '../se-tresandares/se-tresandares';

/**
 * Generated class for the SeCaminhadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-caminhada',
  templateUrl: 'se-caminhada.html',
})
export class SeCaminhadaPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  caminhada: any;
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
    console.log('ionViewDidLoad SeCaminhadaPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);

  }

  continuar(){
    let soma = parseFloat(this.caminhada);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTresandaresPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    })
  }

}
