import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsProvider } from '../../providers/charts/charts';
import { Chart } from 'chart.js';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-u-evolucao',
  templateUrl: 'u-evolucao.html',
})
export class UEvolucaoPage {

  @ViewChild('lineCanvas') lineCanvas;

  chart = [];
  id_cadastro = this.navParams.get('id_cadastro');
  id_tratamento = this.navParams.get('id_tratamento');

  meta;
  peso;
  sessoes;
  contsessoes;
  imagem;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private charts: ChartsProvider
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UEvolucaoPage');
    console.log(this.id_cadastro);
    console.log(this.id_tratamento);

    this.charts.buscarDados(this.id_cadastro,this.id_tratamento).then(res => {
      let resposta = res.json();
      let peso = resposta.map(resposta => resposta.peso)
      let datas = resposta.map(resposta => resposta.data)

      console.log(res.json())



      this.chart = new Chart(this.lineCanvas.nativeElement,{
        type: 'line',
        data:{
          labels:datas,
          datasets: [
            {
              data: peso,
              borderColor: '#4e4940',
              fill: false,
              spanGaps: false,
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes:[{
              display: true
            }]
          }
        }
      })

    }).catch((res) => {
     console.log(res)
    });


    let api = 'https://lipolysis.grupoanx.com.br/usuario/evolucao.php?id_tratamento=' + this.id_tratamento;
      this.http.get(api).toPromise().then((resp)=>{

        let resposta = resp.json();
        this.meta = resposta.map(resposta => resposta.meta)
        this.peso = resposta.map(resposta => resposta.peso)
        this.sessoes = resposta.map(resposta => resposta.sessoes)
        this.contsessoes = resposta.map(resposta => resposta.contsessoes)
        this.imagem = resposta.map(resposta => resposta.imagem)

        this.meta = this.meta[0]
        this.peso = this.peso[0]
        this.sessoes = this.sessoes[0]
        this.contsessoes = this.contsessoes[0]

        console.log(resposta);
        console.log(this.imagem);
      }).catch((resp)=>{

        console.log(resp);
      });
  }

}
