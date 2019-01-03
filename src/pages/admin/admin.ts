import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AAdicionardicaPage } from '../a-adicionardica/a-adicionardica';
import { AUsuariosPage } from '../a-usuarios/a-usuarios';
import { AProfissionaisPage } from '../a-profissionais/a-profissionais';
import { AProspectosPage } from '../a-prospectos/a-prospectos';
import { ARelatoriosPage } from '../a-relatorios/a-relatorios';
import { ASorteiosPage } from '../a-sorteios/a-sorteios';
import { ADicasPage } from '../a-dicas/a-dicas';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  private storage: Storage) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');

    this.storage.get('id_login').then((valor)=>{
      console.log(valor)
    });
    this.storage.get('permissao').then((valor)=>{
      console.log(valor)
    });
  }

  profissionais(){
    this.navCtrl.push(AProfissionaisPage)
  }

  clientes(){
    this.navCtrl.push(AUsuariosPage)
  }

  dicas(){
    this.navCtrl.push(ADicasPage)
  }

  relatorios(){
    this.navCtrl.push(ARelatoriosPage)
  }

  sorteios(){
    this.navCtrl.push(ASorteiosPage)
  }

  sair(){
    this.storage.remove('id_login');
    this.storage.remove('permissao');
    this.navCtrl.push(HomePage)
  }





}
