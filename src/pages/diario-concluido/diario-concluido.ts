import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UHomePage } from '../u-home/u-home';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-diario-concluido',
  templateUrl: 'diario-concluido.html',
})
export class DiarioConcluidoPage {

  usuario: any;

  dia = this.navParams.get('dia')
  sono = this.navParams.get('sono')
  agua = this.navParams.get('agua')
  rd = this.navParams.get('rd')
  alimentacao = this.navParams.get('alimentacao')
  nutricao = this.navParams.get('nutricao')
  fisico = this.navParams.get('fisico')
  fumante = this.navParams.get('fumante')



  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,  public storage: Storage) {
    this.usuario = storage.get("id_login").then((value)=>{
      let teste = value;

      let diario = {
        "dia":this.dia,
        "sono":this.sono,
        "agua":this.agua,
        "rd":this.rd,
        "alimentacao":this.alimentacao,
        "nutricao":this.nutricao,
        "fisico":this.fisico,
        "fumante":this.fumante,
        "id": teste,
      }

      console.log(diario);

      let api = 'https://lipolysis.grupoanx.com.br/diario/index.php';

      let headers: Headers = new Headers();
        headers.append('Content-type','application/json');

        return this.http.post(
          api,
          diario,
          new RequestOptions({ headers: headers })
        ).subscribe(
            res => {

              console.log(res.json())

            },
            err => {
              console.log(err.json())
            }
          );

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiarioConcluidoPage');

  }

  proximo(){
    this.navCtrl.push(UHomePage)
  }

}
