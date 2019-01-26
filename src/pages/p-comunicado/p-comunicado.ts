import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-p-comunicado',
  templateUrl: 'p-comunicado.html',
})
export class PComunicadoPage {

  comunicado;
  id_cadastro = this.navParams.get('id_cadastro');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,) {

    let loading = this.loadingCtrl.create({ content : "Carregando comunicados", })
    loading.present();

    let api1 = 'https://lipolysis.grupoanx.com.br/profissional/inserirSelecionarComunicado.php?id_profissional =' + this.id_cadastro;
      this.http.get(api1).toPromise().then((resp)=>{
        loading.dismiss();
        console.log(resp);

      }).catch((resp)=>{
        loading.dismiss();
        console.log(resp);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PComunicadoPage');
  }

  inserirComunicado(){

    let dadosComunicado = {
      'id_profissional': this.navParams.get('id_cadastro'),
      'comunicado': this.comunicado
    }

    let loading = this.loadingCtrl.create({content : "Registrando comunicado para seus clientes",});
        loading.present();

        console.log(dadosComunicado);

            let api = 'https://lipolysis.grupoanx.com.br/profissional/inserirSelecionarComunicado.php';
            let headers: Headers = new Headers();
              headers.append('Content-type','application/json');

            this.http.post(api,dadosComunicado,new RequestOptions({ headers: headers })).subscribe(
                  res => {
                    console.log(res.json());

                    let retorno = res.json();

                    if( retorno == "sucesso"){
                      console.log(res.json());

                      loading.dismiss();
                      //this.alertCtrl.create({
                      //  subTitle : "Avaliação já registrada no banco e enviada para o seu email, caso não encontre na caixa de entrada verifique no caixa de spam",
                        //buttons : [{
                        //  text: "OK",
                          //handler: () => {
                            // this.navCtrl.push(PSessoesPage,{
                              // 'id_cadastro':this.id_cadastro,
                            //   'id':this.id_cliente,
                            //   'permissao':this.permissao,
                            //   "tratamento": this.tratamento,
                            //   "sexo":this.sexo,
                            //   "data":this.data,
                            //   "hora":this.hora,
                             //})
                           //}
                        //}]
                      //}).present();
                    }else if ( retorno == "erro"){
                      loading.dismiss();

                      console.log(res.json());
                      console.log("erro no retorno ");


                      //this.alertCtrl.create({
                      //  title: 'Ops .. Algo deu errado',
                      //  subTitle : "Tivemos um problema para salvar seu teste.",
                      //  buttons : [{
                      //    text: "OK",
                      //  }]
                    //  }).present();
                    }

                  },
                  err => {

                    console.log(err.json());
                    loading.dismiss();


                    //this.alertCtrl.create({
                    //  title: 'Ops .. Algo deu errado',
                    //  subTitle : "Ocorreu um erro ao salvar o resultado do teste no banco de dados.",
                      //buttons : [{
                      //  text: "OK",
                    //  }]
                  //  }).present();

                  }

              );
          }

}
