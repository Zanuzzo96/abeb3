import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AUsuariosPage } from '../a-usuarios/a-usuarios';
import { AProfissionaisPage } from '../a-profissionais/a-profissionais';
import { ARelatoriosPage } from '../a-relatorios/a-relatorios';
import { ASorteiosPage } from '../a-sorteios/a-sorteios';
import { ADicasPage } from '../a-dicas/a-dicas';
import { HomePage } from '../home/home';
import { ASugestoesPage } from '../a-sugestoes/a-sugestoes';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {



  constructor(public navCtrl: NavController,public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  profissionais(){
    this.navCtrl.push(AProfissionaisPage)
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
    this.navCtrl.push(HomePage)
  }





}
