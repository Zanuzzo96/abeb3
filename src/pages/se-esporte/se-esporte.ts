import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeDuracaoesportePage } from '../se-duracaoesporte/se-duracaoesporte';

/**
 * Generated class for the SeEsportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-esporte',
  templateUrl: 'se-esporte.html',
})
export class SeEsportePage {

  esporte : any;
  pontuacao : number = parseFloat(this.navParams.get('pontuacao')) ;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeEsportePage');
    console.log(this.pontuacao);
  }

  continuar(){
    let soma = parseFloat(this.esporte);

    this.pontuacao += soma;
    console.log(this.pontuacao);
    this.navCtrl.push(SeDuracaoesportePage,{
      pontuacao : this.pontuacao
    });
  }

}
