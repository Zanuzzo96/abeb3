import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-u-perfil',
  templateUrl: 'u-perfil.html',
})
export class UPerfilPage {
  cadastro: any ='perfil';
  usuario: any;

  perfilUsuario = {
    "nome":"",
    "cpf":"",
    "nasc":"",
    "sexo":"",
    "telefone":"",
    "email":"",
    "rua":"",
    "cidade":"",
    "estado":"",
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public storage: Storage) {

                this.usuario = storage.get("id_login").then((value)=>{
                  let teste = value;
                  let api = 'https://lipolysis.grupoanx.com.br/perfil/usuario.php?user='+teste;
                  this.http.get(api).toPromise().then((resp)=>{
                    let perfilRetorno = resp.json();
                    console.log(perfilRetorno);

                    this.perfilUsuario.nome = perfilRetorno[0].nome;
                    this.perfilUsuario.cpf = perfilRetorno[0].cpf;
                    this.perfilUsuario.nasc = perfilRetorno[0].nasc;
                    let sexo = perfilRetorno[0].sexo;

                    if(sexo == "m"){
                      this.perfilUsuario.sexo = "masculino"
                    }else{
                      this.perfilUsuario.sexo = "feminino"
                    }

                    this.perfilUsuario.telefone = perfilRetorno[0].telefone;
                    this.perfilUsuario.email = perfilRetorno[0].email;

                    this.perfilUsuario.rua = perfilRetorno[0].endereco;
                    this.perfilUsuario.cidade = perfilRetorno[0].cidade;
                    this.perfilUsuario.estado = perfilRetorno[0].estado;


                  }).catch((erro)=>{
                    console.log(erro.json())
                  });
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UPerfilPage');
  }

  atualizar(){

  }

}
