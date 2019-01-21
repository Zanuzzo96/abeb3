import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HomePage } from '../home/home';

import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-registro-cliente',
  templateUrl: 'registro-cliente.html',
})
export class RegistroClientePage {

  cadastro = {
    "nome_cliente" : "",
    "cpf" : "",
    "nasc" : "",
    "sexo" : "",
    "telefone" : "",
    "email" : "",
    "cep" : "",
    "endereco" : "",
    "cidade": "",
    "estado":"",
    "login" : "",
    "senha" : ""
  }

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroClientePage');
  }

  preencher(){
    let cep = this.cadastro.cep;
    console.log(cep);
    let viacep = 'https://viacep.com.br/ws/'+ cep +'/json/';
    this.http.get(viacep).toPromise().then((response) => {
      console.log(response.json())
      let endereco = response.json();
      this.cadastro.endereco = endereco.logradouro + ' - ' + endereco.bairro;
      this.cadastro.cidade = endereco.localidade;
      this.cadastro.estado = endereco.uf;
    }).catch((response)=>{
      this.alertCtrl.create({
        subTitle : "Não conseguimos encontrar seu cep",
        buttons : [{ text: "OK" }]
      }).present();
    });
  }

  criarConta(){

    let loading = this.loadingCtrl.create({
      content : "procedendo seu Registro",
    });

    loading.present();

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/cadastro/cliente.php',
        this.cadastro,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log(res.json());

            let retorno = res.json();

            loading.dismiss();

            if( retorno == "sucesso"){
              this.alertCtrl.create({
                title: 'Sucesso',
                subTitle : "Cadastro gerado com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                    this.navCtrl.push(HomePage)
                  }
                }]
              }).present();
            }else if ( retorno == "erro"){
              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Você não preencheu todo o formulário.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }else if ( retorno == "erro0"){
              this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "CPF ou Login já cadastrados.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }
          },
          err => {
            this.alertCtrl.create({
              title: 'Ops .. Algo deu errado',
              subTitle : "Não foi possivel conectar com o banco de dados, tente novamente.",
              buttons : [{
                text: "OK",
              }]
            }).present();

          }
        );
  }

}
