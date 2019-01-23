import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PSessoesPage } from '../p-sessoes/p-sessoes';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-p-clientes',
  templateUrl: 'p-clientes.html',
})
export class PClientesPage {

  dadosClientes:any;
  clientes:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public storage: Storage,
              public loadingCtrl: LoadingController) {

                let loading = this.loadingCtrl.create({
                  content : "Carregando dados do perfil",
                });

                loading.present();

                this.dadosClientes = storage.get("id_cadastro").then((value)=>{
                  let id_prof = value;
                  let api = 'https://lipolysis.grupoanx.com.br/profissional/clientes.php?profissional=' + id_prof;

                    this.http.get(api).toPromise().then((resp)=>{

                      this.clientes = resp.json();
                      console.log(this.clientes);
                      loading.dismiss();

                    }).catch((resp)=>{
                      
                      console.log(resp);
                      loading.dismiss();

                    });

                });

  }//fim do constructor

  ionViewDidLoad() {
    console.log('ionViewDiddLoad PClientesPage');

  }

  sessoes(id,sexo){
    this.navCtrl.push(PSessoesPage,{
      "id":id,
      "sexo":sexo
    });
  }

}
