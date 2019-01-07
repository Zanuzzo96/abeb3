import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-p-diario',
  templateUrl: 'p-diario.html',
})
export class PDiarioPage {

  diario;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public storage: Storage) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PDiarioPage');

    this.storage.get("id_login").then((value)=>{
      let id_prof = value;
      let api = 'https://lipolysis.grupoanx.com.br/profissional/diario.php?profissional=' + id_prof;

        this.http.get(api).toPromise().then((resp)=>{
          this.diario = resp.json();
          console.log(this.diario)

        }).catch((resp)=>{
          console.log(resp);
        });

    });
  }

}
