import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-p-agenda',
  templateUrl: 'p-agenda.html',
})
export class PAgendaPage {

  dadosClientes:any;
  retornoAgenda:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public storage: Storage) {

                this.dadosClientes = storage.get("id_login").then((value)=>{
                  let id_prof = value;
                  let api = 'https://lipolysis.grupoanx.com.br/profissional/agenda.php?profissional=' + id_prof;

                    this.http.get(api).toPromise().then((resp)=>{
                      this.retornoAgenda = resp.json();
                      console.log(this.retornoAgenda)

                    }).catch((resp)=>{
                      console.log(resp);
                    });

                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PAgendaPage');
  }

  sessoes(id,sexo,tratamento,data,hora){
    this.navCtrl.push(PSessoesPage,{
      "id":id,
      "sexo":sexo,
      "tratamento":tratamento,
      "data":data,
      "hora":hora
    })
  }

}
