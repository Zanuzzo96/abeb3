import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PAgendaPage } from '../p-agenda/p-agenda';
import { PClientesPage } from '../p-clientes/p-clientes';
import { PDiarioPage } from '../p-diario/p-diario';
import { PHistoricoPage } from '../p-historico/p-historico';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { PSugestoesPage } from '../p-sugestoes/p-sugestoes';
import { PPerfilPage } from '../p-perfil/p-perfil';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-profissional',
  templateUrl: 'profissional.html',
})
export class ProfissionalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfissionalPage');
  }

  sair(){
    this.storage.remove('id_login');
    this.storage.remove('permissao');
    this.navCtrl.push(HomePage)
  }

  perfil(){
    this.navCtrl.push(PPerfilPage)
  }

  agenda(){
    this.navCtrl.push(PAgendaPage)
  }

  diario(){
    this.navCtrl.push(PDiarioPage)
  }

  clientes(){
    this.navCtrl.push(PClientesPage)
  }

  sugestoes(){
    this.navCtrl.push(PSugestoesPage)
  }

  historico(){
    this.navCtrl.push(PHistoricoPage)
  }

  sessoes(){
    this.navCtrl.push(PSessoesPage)
  }

}
