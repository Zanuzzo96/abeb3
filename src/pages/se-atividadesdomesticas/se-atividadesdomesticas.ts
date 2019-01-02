import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeSentadoPage } from '../se-sentado/se-sentado';


@IonicPage()
@Component({
  selector: 'page-se-atividadesdomesticas',
  templateUrl: 'se-atividadesdomesticas.html',
})
export class SeAtividadesdomesticasPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  public atividade : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeAtividadesdomesticasPage');
  }

  continuar(){
    let soma: number = parseFloat(this.atividade);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeSentadoPage,{
      pontuacao : this.pontuacao
    });
  }

}
