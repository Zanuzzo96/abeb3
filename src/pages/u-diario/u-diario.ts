import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { UHomePage } from '../u-home/u-home';
import { DiarioDiaPage } from '../diario-dia/diario-dia';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-u-diario',
  templateUrl: 'u-diario.html',
})
export class UDiarioPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    public storage: Storage
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UDiarioPage');

    this.storage.get("id_cadastro").then((value)=>{
      let ident = value;

      let api = 'https://lipolysis.grupoanx.com.br/usuario/diario.php?id=' + ident ;
      this.http.get(api).toPromise()
      .then((res)=>{
        let retorno = res.json();

        if(retorno == "sucesso"){
          this.alertCtrl.create({
            title: 'Ops ..',
            subTitle : "Você já inseriu o seu diario de hoje, só poderá inserir novamente amanhã.",
            buttons : [{
              text: "OK",
              handler: () => {
               this.navCtrl.push(UHomePage)
              }
            }]
          }).present();
        }

      })
      .catch((res)=>{console.log(res)})

    }).catch((value) => {
      console.log(value);
    })

  }

  iniciar(){
    this.navCtrl.push(DiarioDiaPage)
  }

  voltar(){
    this.navCtrl.push(UHomePage)
  }

}
