import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  dia:any;

  cliente = this.navParams.get('id_user');
  id_tratamento = this.navParams.get('id_tratamento');

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http,
      public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');


  }

  verAgenda(data){
    console.log(data)

    this.storage.get("id_login").then((value)=>{
      let id_prof = value;
      console.log(id_prof)
      let api = 'https://lipolysis.grupoanx.com.br/profissional/agendar.php?profissional=' + id_prof + '&data=' + data;

        this.http.get(api).toPromise().then((resp)=>{
          this.dia = resp.json();
          console.log(this.dia)

        }).catch((resp)=>{
          console.log(resp);
        });

    });
  }

  agendar(data,hora){
    console.log(data)
    console.log(hora)
    console.log(this.cliente)
    console.log(this.id_tratamento)

  }

}
