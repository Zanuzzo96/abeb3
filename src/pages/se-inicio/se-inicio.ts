import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SeEnergiaPage } from '../se-energia/se-energia';
import { UsuarioPage } from '../usuario/usuario';
import { UHomePage } from '../u-home/u-home';
import { ProfissionalPage } from '../profissional/profissional';


@IonicPage()
@Component({
  selector: 'page-se-inicio',
  templateUrl: 'se-inicio.html',
})
export class SeInicioPage {

  permissao = 0
  cliente:any;
  tratamento:any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cliente = this.navParams.get('id_user');
    this.tratamento = this.navParams.get('tratamento');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SeInicioPage');
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);
  }

  iniciar(){
    this.navCtrl.push(SeEnergiaPage,{
      "cliente":this.cliente,
      "tratamento":this.tratamento,
      "sexo":this.sexo,
      "data":this.data,
      "hora":this.hora,
    })
  }

  voltar(){

    if( this.permissao == 1){
        this.navCtrl.push(UHomePage)
    }else if(this.permissao == 0){
      this.navCtrl.push(UsuarioPage)
    }else if(this.permissao == 2){
      this.navCtrl.push(ProfissionalPage)
    }

  }

}
