import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RecuperacaoSenhaPage } from '../recuperacao-senha/recuperacao-senha';
import { AdminPage } from '../admin/admin';
import { ProfissionalPage } from '../profissional/profissional';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';
import { LoginProvider } from '../../providers/login/login';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login : string;
  public senha : string;
  public id_cadastro: any;
  public permissao : any;

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              private loginProvider: LoginProvider,
            ) {}

  ionViewDidLoad() {}

  logar() {

    let loading = this.loadingCtrl.create({content : "Validando login"});
    loading.present();

    this.loginProvider.validarLogin(this.login , this.senha ).then((response) => {

      let retorno = response.json();
      this.permissao = retorno[0].permissao;
      this.id_cadastro = retorno[0].id_cadastro;

      loading.dismiss();
          if( this.permissao == 3){
            this.navCtrl.push(AdminPage,{
              'id_cadastro':this.id_cadastro,
              'permissao':this.permissao
            });
          }
          else if ( this.permissao == 2 ){
            this.navCtrl.push(ProfissionalPage,{
              'id_cadastro':this.id_cadastro,
              'permissao':this.permissao
            });
          }
          else if ( this.permissao == 1){
            this.navCtrl.push(UHomePage,{
              'id_cadastro':this.id_cadastro,
              'permissao':this.permissao
            });
          }
          else if ( this.permissao == 0){
            this.navCtrl.push(UsuarioPage,{
              'id_cadastro':this.id_cadastro,
              'permissao':this.permissao
            });
          }
          else{
            console.log(this.id_cadastro)
            console.log(this.permissao)
            this.alertCtrl.create({
              subTitle : "Não encontramos nenhum cadastro",
              buttons : [{
                text: "OK",
              }]
            }).present();

          }

    }).catch((response) => {
      loading.dismiss();
      this.alertCtrl.create({
        subTitle : "Não encontramos nenhum cadastro",
        buttons : [{
          text: "OK",
        }]
      }).present();
    });
  }

  RecuperarSenha() {
    this.navCtrl.push(RecuperacaoSenhaPage);
  }


}
