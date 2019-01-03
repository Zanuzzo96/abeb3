import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AIncluirrcPage } from '../a-incluirrc/a-incluirrc';
import { AdminPage } from '../admin/admin';
import { Http, Headers,Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-a-profissionais',
  templateUrl: 'a-profissionais.html',
})
export class AProfissionaisPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AProfissionaisPage');

    let loading = this.loadingCtrl.create({
      content : "Carregando profissionais",
    });

    loading.present();

    let api = 'https://lipolysis.grupoanx.com.br/profissional/lista.php';
    this.http.get(api).toPromise().then((resp)=>{
      console.log(resp);

      loading.dismiss();
    }).catch((resp)=>{
      console.log(resp)
      loading.dismiss();
    });
  }

  adicionarrc(){
    this.navCtrl.push(AIncluirrcPage)
  }

  voltar(){
    this.navCtrl.push(AdminPage)
  }

}
