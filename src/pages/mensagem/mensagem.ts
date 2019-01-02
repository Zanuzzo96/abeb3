import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers,Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';
import { UsuarioPage } from '../usuario/usuario';


@IonicPage()
@Component({
  selector: 'page-mensagem',
  templateUrl: 'mensagem.html',
})
export class MensagemPage {

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public storage: Storage) {
  }

  usuario: any;

  id_prof = this.navParams.get('id');
  mensagem: any;
  contato: any;
  gostaria: any;



  ionViewDidLoad() {
    console.log('ionViewDidLoad MensagemPage');
    console.log(this.id_prof)
  }

  enviarMensagem(){

    this.usuario = this.storage.get("id_login").then((value)=>{
      let usuario = value;

      let email = {
        "user":usuario,
        "prof":this.id_prof,
        "mensagem":this.mensagem,
        "contato":this.contato,
        "gostaria":this.gostaria
      }

      console.log(email);

        let loading = this.loadingCtrl.create({
          content : "procedendo seu Registro",
        });

        loading.present();

        let headers: Headers = new Headers();
        headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/mensagem/index.php',
        email,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log(res.json());
            let retorno = res.json();

            loading.dismiss();

            if( retorno == "sucesso"){
              let alerta_sucesso = this.alertCtrl.create({
                title: 'Sucesso',
                subTitle : "Mensagem enviada com sucesso, o mais breve possivel entraremos em contato",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(UsuarioPage)
                  }
                }]
              }).present();
            }else if ( retorno == "erro"){
              loading.dismiss();

              let alerta_erro = this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Não conseguimos enviar sua mensagem, tente novamente.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }

          },
          err => {

            console.log(err.json());
            loading.dismiss();

              let alerta_erro_resposta = this.alertCtrl.create({
                  title: 'Ops .. Algo deu errado',
                  subTitle : "Não foi possivel conectar com o banco de dados, tente novamente.",
                  buttons : [{
                    text: "OK",
                  }]
                }).present();

          }
        );
      });

  }

}
