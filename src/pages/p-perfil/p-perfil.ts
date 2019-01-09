import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-p-perfil',
  templateUrl: 'p-perfil.html',
})
export class PPerfilPage {

  cadastro: any ='perfil';
  usuario: any;
  atualizacao: any;

  perfilProf = {
    "nome":"",
    "cpf":"",
    "nasc":"",
    "sexo":"",
    "telefone":"",
    "email":"",
    "estabelecimento":"",
    "formacao":"",
    "rua":"",
    "cidade":"",
    "estado":"",
    "cep":""
  }

  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
                public alertCtrl: AlertController,
                public storage: Storage,
                public loadingCtrl: LoadingController) {

                  //let loading = this.loadingCtrl.create({
                    //content : "Carregando dados do perfil",
                  //});

                  //loading.present();

                  this.usuario = storage.get("id_login").then((value)=>{
                    let teste = value;
                    let api = 'https://lipolysis.grupoanx.com.br/profissional/atualizar.php?user='+teste;
                    this.http.get(api).toPromise().then((resp)=>{
                      //loading.dismiss();
                      console.log(resp.json())


//                      if(sexo == "m"){
//                        this.perfilUsuario.sexo = "masculino"
//                      }else{
//                        this.perfilUsuario.sexo = "feminino"
//                      }

                    }).catch( err=>{
                      console.log(err.json())
                      //loading.dismiss();
                    });
                  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PPerfilPage');
  }

}
