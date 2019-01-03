import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-p-clientes',
  templateUrl: 'p-clientes.html',
})
export class PClientesPage {

  dadosClientes:any;
  emtratamento: any;
  semtratamento:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public storage: Storage) {

    this.dadosClientes = storage.get("id_login").then((value)=>{
      let id_prof = value;
      let api = 'https://lipolysis.grupoanx.com.br/profissional/clientes.php?profissional=' + id_prof;

        this.http.get(api).toPromise().then((resp)=>{
          let perfilRetorno = resp.json();
          this.emtratamento = perfilRetorno[1];
          this.semtratamento = perfilRetorno[2];
          console.log(this.emtratamento);
          console.log(this.semtratamento);
        }).catch((resp)=>{
          console.log(resp);
        });

    });

  }//fim do constructor

  cliente = 'emtratamento';

  ionViewDidLoad() {
    console.log('ionViewDiddLoad PClientesPage');

  }

  sessoes(id){
    this.navCtrl.push(PSessoesPage,{
      "id":id,
    });
  }

}
