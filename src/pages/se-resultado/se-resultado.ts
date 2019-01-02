import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';
import { UsuarioPage } from '../usuario/usuario';
import { PSessoesPage } from '../p-sessoes/p-sessoes';

@IonicPage()
@Component({
  selector: 'page-se-resultado',
  templateUrl: 'se-resultado.html',
})
export class SeResultadoPage {

  usuario: any;
  nivel:any;
  resultadoFinal : number = parseFloat(this.navParams.get('pontuacao'));

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public storage: Storage) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeResultadoPage');
  }

  concluir(){

    this.nivel = this.storage.get("permissao").then((value)=>{
      let permissao = value;

      console.log('permissao', permissao)

      if( permissao == 2 ){

          this.usuario = this.storage.get("id_login").then((id)=>{
            let ident = id;

            console.log('id', ident)


            let sedentarismo = {
              "id_login":ident,
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
                      this.navCtrl.push(PSessoesPage)

                  }else if ( retorno == "erro"){
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

                  let alerta_erro_resposta = this.alertCtrl.create({
                    title: 'Ops .. Algo deu errado',
                    subTitle : "Ocorreu um erro ao salvar o resultado do teste no banco de dados.",
                    buttons : [{
                      text: "OK",
                    }]
                  }).present();

                }
              );
            });
    }else{
      this.navCtrl.push(UsuarioPage)
    }

  });
}
}
