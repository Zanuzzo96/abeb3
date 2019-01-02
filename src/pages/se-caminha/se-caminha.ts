import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeCaminhadaPage } from '../se-caminhada/se-caminhada';

/**
 * Generated class for the SeCaminhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-caminha',
  templateUrl: 'se-caminha.html',
})
export class SeCaminhaPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  caminha: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeCaminhaPage');
    console.log(this.pontuacao);
  }

  continuar(){
    let soma = parseFloat(this.caminha);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeCaminhadaPage,{
      pontuacao : this.pontuacao
    })
  }

}
