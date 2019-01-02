import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SeEnergiaPage } from '../se-energia/se-energia';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';
import { Storage } from '@ionic/storage';
import { PSessoesPage } from '../p-sessoes/p-sessoes';


@IonicPage()
@Component({
  selector: 'page-se-inicio',
  templateUrl: 'se-inicio.html',
})
export class SeInicioPage {

  permissao = 0

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    storage.get('permissao').then((val2) => {
      this.permissao =  val2;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeInicioPage');
  }

  iniciar(){
    this.navCtrl.push(SeEnergiaPage)
  }

  voltar(){

    if( this.permissao == 1){
        this.navCtrl.push(UHomePage)
    }else if(this.permissao == 0){
      this.navCtrl.push(UsuarioPage)
    }else if(this.permissao == 2){
      this.navCtrl.push(PSessoesPage)
    }

  }

}
