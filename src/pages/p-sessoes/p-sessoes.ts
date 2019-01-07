import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SaudePg1Page } from '../saude-pg1/saude-pg1';
import { SeInicioPage } from '../se-inicio/se-inicio';
import { AcInicioPage } from '../ac-inicio/ac-inicio';
import { ProfissionalPage } from '../profissional/profissional';
import { AgendaPage } from '../agenda/agenda';
import { ImagemSessaoPage } from '../imagem-sessao/imagem-sessao';
import { IniciarTratamentoPage } from '../iniciar-tratamento/iniciar-tratamento';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-p-sessoes',
  templateUrl: 'p-sessoes.html',
})
export class PSessoesPage {

  nome = "teste";
  cliente = this.navParams.get('id');
  id_tratamento = this.navParams.get('tratamento');
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  configuracao:any;
  orientacao: any;
  peso: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    if(this.id_tratamento){
      this.configuracao = 0;
    }else{
      this.configuracao = 1;
    }

    console.log("cliente",this.cliente)
    console.log("tratamento", this.id_tratamento)
    console.log("sexo", this.sexo)
    console.log("data", this.data)
    console.log("hora", this.hora)


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PSessoesPage');
  }

        //Inicio dos graficos de linha
        public lineChartData:Array<any> = [
          {data: [], label: 'Series A'}
        ];
        public lineChartLabels:Array<any> = [];
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

        tratamento(){
          this.navCtrl.push(IniciarTratamentoPage,{
            "id_user":this.cliente
          })
        }

        concluir(){

          let conclusao = {
            "data": this.data,
            "hora":this.hora,
            "orientacao": this.orientacao,
            "peso": this.peso,
            "cliente": this.cliente,
            "tratamento": this.id_tratamento
          }

          let loading = this.loadingCtrl.create({content : "Concluindo sessão"});

          loading.present();

          let api = 'https://lipolysis.grupoanx.com.br/profissional/concluir.php';
          let headers: Headers = new Headers();
            headers.append('Content-type','application/json');

            return this.http.post(
              api,
              conclusao,
              new RequestOptions({ headers: headers })
            ).subscribe(
                res => {
                  console.log(res.json());
                  let retorno = res.json();

                    if(retorno == "sucesso"){
                      loading.dismiss()

                      this.alertCtrl.create({
                        subTitle : "Sessão concluida com sucesso",
                        buttons : [{
                          text: "OK",
                          handler: () => {
                             this.navCtrl.push(ProfissionalPage)
                           }
                        }]
                      }).present();
                    }else{
                      loading.dismiss()

                      this.alertCtrl.create({
                        subTitle : "Não conseguimos concluir a sessão, tente novamente",
                        buttons : [{
                          text: "OK",
                        }]
                      }).present();
                    }

                },
                err => {
                  loading.dismiss()

                  console.log(err.json());
                }
            );

        }

}
