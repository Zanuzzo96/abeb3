import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeTrabalhoPage } from '../se-trabalho/se-trabalho';

@IonicPage()
@Component({
  selector: 'page-se-tresandares',
  templateUrl: 'se-tresandares.html',
})
export class SeTresandaresPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  tresandares: any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  id_cadastro = this.navParams.get('id_cadastro');
  permissao = this.navParams.get('permissao');
  tratamento = this.navParams.get('tratamento');

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeTresandaresPage');
    console.log(this.pontuacao);
    console.log("cliente",this.id_cadastro);
    console.log("permissao",this.permissao);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);

  }

  continuar(){
    let soma = parseFloat(this.tresandares);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeTrabalhoPage,{
      'pontuacao': this.pontuacao,
      'id_cadastro': this.cliente,
      'permissao':this.permissao,
      'tratamento': this.tratamento,
      'sexo':this.sexo,
      'data':this.data,
      'hora':this.hora,
    })
  }

}
