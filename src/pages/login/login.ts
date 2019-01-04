import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RecuperacaoSenhaPage } from '../recuperacao-senha/recuperacao-senha';
import { AdminPage } from '../admin/admin';
import { ProfissionalPage } from '../profissional/profissional';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';


import { LoginProvider } from '../../providers/login/login';

import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public permissao : any;
  public login : string;
  public senha : string;
  public id_login: any;

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private loginProvider: LoginProvider,
              private storage: Storage) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar() {
    console.log(this.login);

    let loading = this.loadingCtrl.create({
      content : "Validando login",
    });

    loading.present();

    this.loginProvider.validarLogin(this.login , this.senha ).then((response) => {

      console.log(response);
      let retorno = response.json();

      this.permissao = retorno[0].permissao;
      this.id_login = retorno[0].id_login;

      this.storage.set('id_login', this.id_login);
      this.storage.set('permissao', this.permissao);

      loading.dismiss();
          if( this.permissao == 3){
            this.navCtrl.push(AdminPage);
          }
          else if ( this.permissao == 2 ){
            this.navCtrl.push(ProfissionalPage);
          }
          else if ( this.permissao == 1){
            this.navCtrl.push(UHomePage);
          }
          else if ( this.permissao == 0){
            this.navCtrl.push(UsuarioPage);
          }
          else if ( this.permissao > 3) {
            let alerta = this.alertCtrl.create({
              subTitle : "Não encontramos nenhum cadastro",
              buttons : [{
                text: "OK",
              }]
            }).present();

          }

    }).catch((response) => {
      loading.dismiss()
    });
  }

  RecuperarSenha() {
    this.navCtrl.push(RecuperacaoSenhaPage);
  }


}
