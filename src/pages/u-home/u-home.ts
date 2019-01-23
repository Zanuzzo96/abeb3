import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UDiarioPage } from '../u-diario/u-diario';
import { UDicasPage } from '../u-dicas/u-dicas';
import { UPerfilPage } from '../u-perfil/u-perfil';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
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


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: Http) {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UHomePage');

    this.storage.get("id_cadastro").then((value)=>{
      let usuario = value;
      console.log(usuario);
      let api = 'https://lipolysis.grupoanx.com.br/usuario/agenda.php?usuario=' + usuario;

        this.http.get(api).toPromise().then((resp)=>{
          this.agenda = resp.json();
          console.log(this.agenda)
          this.agendaData = this.agenda[0].data;
          this.agendaHora = this.agenda[0].hora;


        }).catch((resp)=>{
          console.log(resp);
        });

    });
  }

  //Navegação

  sair(){
    this.storage.remove('id_login');
    this.storage.remove('permissao');
    this.navCtrl.push(HomePage)
  }

  diario(){
    this.navCtrl.push(UDiarioPage)
  }
  perfil(){
    this.navCtrl.push(UPerfilPage)
  }
  dicas(){
    this.navCtrl.push(UDicasPage)
  }

  //Inicio dos graficos de linha
  public lineChartData:Array<any> = [
    {data: [85, 89, 84, 88, 86, ], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['1 Sessão', '2 Sessão', '3 Sessão', '4 Sessão', '5 Sessão',];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(248,158,51,0.2)',
      borderColor: 'rgba(248,158,51,1)',
      pointBackgroundColor: 'rgba(248,158,51,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(248,158,51,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}

  // events
  public chartClicked(e:any):void {
  console.log(e);
}

  public chartHovered(e:any):void {
  console.log(e);
}

  //Fim do diagrama de linhas

// Doughnut
//public doughnutChartLabels:string[] = ['Perca de peso', 'Meta',];
//public doughnutChartData:number[] = [70, 30];
//public doughnutChartType:string = 'doughnut';

//private doughnutChartColors: any[] = [{ backgroundColor: ["#f89e33", "#4e4940"] }];


}
