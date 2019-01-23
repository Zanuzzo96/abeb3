import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Storage } from '@ionic/storage';
import { ProfissionalPage } from '../profissional/profissional';

@IonicPage()
@Component({
  selector: 'page-p-contatos',
  templateUrl: 'p-contatos.html',
})
export class PContatosPage {

  contato;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PContatosPage');

    this.storage.get("id_cadastro").then((value)=>{
      let id_prof = value;
      let api = 'https://lipolysis.grupoanx.com.br/profissional/contato/contato.php?profissional=' + id_prof;

        this.http.get(api).toPromise().then((resp)=>{
          this.contato = resp.json();
          console.log(this.contato)

        }).catch((resp)=>{
          console.log(resp);
        });

    });
  }

  apagar(id){

    let loading = this.loadingCtrl.create({
      content : "Apagando contato",
    });

    loading.present();

      let api = 'https://lipolysis.grupoanx.com.br/profissional/contato/contatodelete.php?id=' + id;

      this.http.get(api).toPromise().then((resp)=>{
        let retorno = resp.json();
        if(retorno == "sucesso"){
            this.alertCtrl.create({
              subTitle : "Contato apagado com sucesso",
              buttons : [{
                text: "OK",
                handler: () => {
                  this.navCtrl.push(PContatosPage)
                }
              }]
            }).present();
            loading.dismiss();
          }else{
            this.alertCtrl.create({
              subTitle : "Não conseguimos apagar o contato, tente novamente",
              buttons : [{
                text: "OK"
              }]
            }).present();
            loading.dismiss();
          }

      }).catch((resp)=>{
        console.log(resp);
        loading.dismiss();

        this.alertCtrl.create({
          subTitle : "Erro no banco de dados, tente novamente",
          buttons : [{
            text: "OK",
          }]
        }).present();

      });
  }

  voltar(){
    this.navCtrl.push(ProfissionalPage)
  }

}
