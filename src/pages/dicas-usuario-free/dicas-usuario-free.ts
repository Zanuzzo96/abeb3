import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DicaProvider } from '../../providers/dica/dica';

@IonicPage()
@Component({
  selector: 'page-dicas-usuario-free',
  templateUrl: 'dicas-usuario-free.html',
})
export class DicasUsuarioFreePage {

public dicas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dicaProvider : DicaProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasUsuarioFreePage');

    this.dicaProvider.dicasFree().then((response) => {

        this.dicas = response.json();
        console.log(response)

    }).catch((response)=>{
      console.log('erro na requisicao');
    })
  }

}
