import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeSentadoPage } from '../se-sentado/se-sentado';


@IonicPage()
@Component({
  selector: 'page-se-atividadesdomesticas',
  templateUrl: 'se-atividadesdomesticas.html',
})
export class SeAtividadesdomesticasPage {

  pontuacao : number = parseFloat(this.navParams.get('pontuacao'));
  public atividade : any;
  cliente:any;
  tratamento:any;
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = this.navParams.get('cliente');
    this.tratamento = this.navParams.get('tratamento');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeAtividadesdomesticasPage');
    console.log("cliente",this.cliente);
    console.log(this.sexo);
    console.log(this.data);
    console.log(this.hora);

  }

  continuar(){
    let soma: number = parseFloat(this.atividade);
    this.pontuacao += soma;
    console.log(this.pontuacao);

    this.navCtrl.push(SeSentadoPage,{
      pontuacao : this.pontuacao,
      cliente: this.cliente,
      tratamento: this.tratamento,
      sexo:this.sexo,
      data:this.data,
      hora:this.hora,
    });
  }

}
