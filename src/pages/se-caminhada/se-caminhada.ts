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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeCaminhadaPage');
    console.log(this.pontuacao);
    console.log("cliente",this.cliente);

  }

  continuar(){
    let soma = parseFloat(this.caminhada);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTresandaresPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente

    })
  }

}
