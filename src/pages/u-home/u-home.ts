import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UDiarioPage } from '../u-diario/u-diario';
import { UDicasPage } from '../u-dicas/u-dicas';
import { UPerfilPage } from '../u-perfil/u-perfil';
import { HomePage } from '../home/home';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@IonicPage()
@Component({
  selector: 'page-u-home',
  templateUrl: 'u-home.html',
})
export class UHomePage {

  teste: any = 1;
  agenda;
  agendaData;
  agendaHora;
  nomeUsuario;
  nome;
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');

  constructor(public navCtrl: NavController,public navParams: NavParams,public http: Http) {
    //let api = 'https://lipolysis.grupoanx.com.br/usuario/nomeUsuario.php?usuario=' + this.id_cadastro;

  //this.http.get(api).toPromise().then((resp)=>{
    //    this.agenda = resp.json();
    //    console.log(this.agenda)
    //    this.agendaData = this.agenda[0].data;
    //    this.agendaHora = this.agenda[0].hora;

    //  }).catch((resp)=>{
    //    console.log(resp);
    //  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UHomePage');
    console.log("id usuario", this.id_cadastro);
    console.log("permissao", this.permissao);

      let api = 'https://lipolysis.grupoanx.com.br/usuario/perfil/perfil.php?user=' + this.id_cadastro;

      this.http.get(api).toPromise().then((resp)=>{
          this.nomeUsuario = resp.json();
          this.nome = this.nomeUsuario[0].nome;
          console.log(this.nome)
        }).catch((resp)=>{
          console.log(resp);
        });
  }


  sair(){
    this.navCtrl.push(HomePage)
  }

  diario(){
    this.navCtrl.push(UDiarioPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }
  perfil(){
    this.navCtrl.push(UPerfilPage,{
      'id_cadastro':this.id_cadastro,
      'permissao':this.permissao
    })
  }
  dicas(){
    this.navCtrl.push(UDicasPage)
  }

}
