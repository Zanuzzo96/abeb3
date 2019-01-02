import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MetodoPage } from '../metodo/metodo';
import { DicasUsuarioFreePage } from '../dicas-usuario-free/dicas-usuario-free';
import { LocalizarProfissionalPage } from '../localizar-profissional/localizar-profissional';
import { SeInicioPage } from '../se-inicio/se-inicio';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) { }



  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
  }

  metodo(){
    this.navCtrl.push(MetodoPage);
  }

  localizar(){
    this.navCtrl.push(LocalizarProfissionalPage);
  }

  sedentarismo(){
    this.navCtrl.push(SeInicioPage);
  }

  dicas(){
    this.navCtrl.push(DicasUsuarioFreePage);
  }

  sair(){
    this.storage.remove('id_login');
    this.storage.remove('permissao');
    this.navCtrl.push(HomePage);
  }
}
