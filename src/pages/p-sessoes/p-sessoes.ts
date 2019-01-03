import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgProgressService} from 'ng2-progressbar';

import { SaudePg1Page } from '../saude-pg1/saude-pg1';
import { SeInicioPage } from '../se-inicio/se-inicio';
import { AcInicioPage } from '../ac-inicio/ac-inicio';
import { ProfissionalPage } from '../profissional/profissional';
import { AgendaPage } from '../agenda/agenda';
import { ImagemSessaoPage } from '../imagem-sessao/imagem-sessao';

@IonicPage()
@Component({
  selector: 'page-p-sessoes',
  templateUrl: 'p-sessoes.html',
})
export class PSessoesPage {

  nome = "teste";
  cliente:any;
  id_tratamento: any;
  configuracao:any;
  sexo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cliente = this.navParams.get('id');
    this.id_tratamento = this.navParams.get('tratamento');
    this.sexo = this.navParams.get('sexo');

    if(this.id_tratamento){
      this.configuracao = 0;
    }else{
      this.configuracao = 1;
    }

    console.log("cliente",this.cliente)
    console.log("tratamento", this.id_tratamento)
    console.log("sexo", this.sexo)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PSessoesPage');
  }

        //Inicio dos graficos de linha
        public lineChartData:Array<any> = [
          {data: [85, 89, 84, 88, 86, 85, 84], label: 'Series A'}
        ];
        public lineChartLabels:Array<any> = ['10/12', '15/01', '05/02', '20/02', '01/03', '15/03', '21/03/2018'];
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

        sair(){
          this.navCtrl.push(ProfissionalPage)
        }

        corporal(){
          this.navCtrl.push(AcInicioPage,{
            "user":this.cliente,
            "sexo":this.sexo
          })
        }

        saude(){
          this.navCtrl.push(SaudePg1Page,{
            "user":this.cliente,
            "sexo":this.sexo
          })
        }

        sedentarismo(){
          this.navCtrl.push(SeInicioPage,{
            "id_user":this.cliente
          })
        }

        imagem(){
          this.navCtrl.push(ImagemSessaoPage,{
            "id_user":this.cliente,
            "id_tratamento":this.id_tratamento
          })

          console.log("cliente",this.cliente)
          console.log("tratamento", this.id_tratamento)

        }

        agendar(){
          this.navCtrl.push(AgendaPage,{
            "id_user":this.cliente,
            "id_tratamento":this.id_tratamento
          })
        }

        concluir(){

        }

}
