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
//import { ChartsProvider } from '../../providers/charts/charts';
//import { ChartsModule } from 'ng2-charts';

@IonicPage()
@Component({
  selector: 'page-p-sessoes',
  templateUrl: 'p-sessoes.html',
})
export class PSessoesPage {

  cliente = this.navParams.get('id');
  id_tratamento = this.navParams.get('tratamento');
  sexo = this.navParams.get('sexo');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');
  configuracao:any;
  orientacao: any;
  peso: any;
  metaApi;
  pesoApi;
  sessoesApi;
  contsessoesApi;

  grafico:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    //private charts: ChartsProvider,
  ) {

    if(this.id_tratamento){
      this.configuracao = 0;

      //busca das meta - sessoes - e peso atual
          let loading = this.loadingCtrl.create({ content : "Carregando dados da sessão", })
          loading.present();

          let api1 = 'https://lipolysis.grupoanx.com.br/profissional/meta.php?cliente=' + this.cliente +'&tratamento=' + this.id_tratamento;
            this.http.get(api1).toPromise().then((resp)=>{
              loading.dismiss();
              this.metaApi = resp.json()[0].meta;
              this.pesoApi = resp.json()[0].peso;
              this.sessoesApi = resp.json()[0].sessoes;
              this.contsessoesApi = resp.json()[0].contsessoes;
            }).catch((resp)=>{
              loading.dismiss();
              console.log(resp);
            });



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

    //busca do valores para o grafico
        //let api2 = 'https://lipolysis.grupoanx.com.br/profissional/grafico.php?cliente=' + this.cliente +'&tratamento=' + this.id_tratamento;
      //  this.http.get(api2).toPromise().then((resp1)=>{
      //       this.grafico = resp1.json()
        //     console.log(this.grafico)

      //  }).catch((resp1)=>{
      //      console.log(resp1);
      //  });


      //this.charts.buscarDados().then(res => {
      //  console.log(res)
      //}).catch((res) => {
      //  console.log(res)
      //});

  }

        sair(){
          this.navCtrl.push(ProfissionalPage)
        }

        corporal(){
          this.navCtrl.push(AcInicioPage,{
            "user":this.cliente,
            "sexo":this.sexo,
            "tratamento":this.id_tratamento,
            "data":this.data,
            "hora":this.hora,
          })
        }

        saude(){
          this.navCtrl.push(SaudePg1Page,{
            "user":this.cliente,
            "sexo":this.sexo,
            "tratamento":this.id_tratamento,
            "data":this.data,
            "hora":this.hora,
          })
        }

        sedentarismo(){
          this.navCtrl.push(SeInicioPage,{
            "id_user":this.cliente,
            "tratamento":this.id_tratamento,
            "sexo":this.sexo,
            "data":this.data,
            "hora":this.hora,
          })
        }

        imagem(){
          this.navCtrl.push(ImagemSessaoPage,{
            "id_user":this.cliente,
            "id_tratamento":this.id_tratamento,
            "sexo":this.sexo,
            "data":this.data,
            "hora":this.hora,
          })
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
