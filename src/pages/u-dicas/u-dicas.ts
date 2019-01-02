import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DicaProvider } from '../../providers/dica/dica';

@IonicPage()
@Component({
  selector: 'page-u-dicas',
  templateUrl: 'u-dicas.html',
})
export class UDicasPage {

  dicas : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dicaProvider : DicaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UDicasPage');

    this.dicaProvider.dicasPremium().then((response) => {

        this.dicas = response.json();
        console.log(response)

    }).catch((response)=>{
      console.log('erro na requisicao');
    })
  }

}
