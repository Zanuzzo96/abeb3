import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';
import { UsuarioPage } from '../usuario/usuario';
import { ProfissionalPage } from '../profissional/profissional';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-se-resultado',
  templateUrl: 'se-resultado.html',
})
export class SeResultadoPage {

  usuario: any;
  nivel:any;
  resultadoFinal : number = parseFloat(this.navParams.get('pontuacao'));
  cliente = this.navParams.get('cliente');



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public storage: Storage,
              public loadingCtrl: LoadingController) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeResultadoPage');
    console.log("cliente",this.cliente);

  }

  concluir(){

    this.nivel = this.storage.get("permissao").then((value)=>{
      let permissao = value;

      console.log('permissao', permissao)

      if( permissao == 2 ){

          let loading = this.loadingCtrl.create({
            content : "Registrando a avaliação e enviando para o seu email",
          });

          loading.present();

            let ident = this.cliente;


            console.log('id', ident)


            let sedentarismo = {
              "pontuacao":this.resultadoFinal,
              "id_usuario":ident
            }

            console.log(sedentarismo);

          let api = 'https://lipolysis.grupoanx.com.br/formulario/sedentarismo.php';
          let headers: Headers = new Headers();
            headers.append('Content-type','application/json');

            return this.http.post(
              api,
              sedentarismo,
              new RequestOptions({ headers: headers })
            ).subscribe(
                res => {
                  console.log(res.json());

                  let retorno = res.json();

                  if( retorno == "sucesso"){
                    loading.dismiss();
                    let alerta = this.alertCtrl.create({
                      subTitle : "Avaliação já registrada no banco e enviada para o seu email, caso não encontre na caixa de entrada verifique no caixa de span",
                      buttons : [{
                        text: "OK",
                        handler: () => {
                           this.navCtrl.push(ProfissionalPage)
                         }
                      }]
                    }).present();
                  }else if ( retorno == "erro"){
                    loading.dismiss();

                    let alerta_erro = this.alertCtrl.create({
                      title: 'Ops .. Algo deu errado',
                      subTitle : "Tivemos um problema para salvar seu teste.",
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
                    subTitle : "Ocorreu um erro ao salvar o resultado do teste no banco de dados.",
                    buttons : [{
                      text: "OK",
                    }]
                  }).present();

                }

            );
    }else{
      this.navCtrl.push(UsuarioPage)
    }

  });
}
}
