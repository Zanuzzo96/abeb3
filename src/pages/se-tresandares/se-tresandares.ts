import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeTrabalhoPage } from '../se-trabalho/se-trabalho';

/**
 * Generated class for the SeTresandaresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-se-tresandares',
  templateUrl: 'se-tresandares.html',
})
export class SeTresandaresPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  tresandares: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTresandaresPage');
    console.log(this.pontuacao);
  }

  continuar(){
    let soma = parseFloat(this.tresandares);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTrabalhoPage,{
      pontuacao : this.pontuacao
    })
  }

}
