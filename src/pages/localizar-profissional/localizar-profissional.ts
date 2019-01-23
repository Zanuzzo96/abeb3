import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';
import { PerfilProfissionalPage } from '../perfil-profissional/perfil-profissional';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-localizar-profissional',
  templateUrl: 'localizar-profissional.html',
})
export class LocalizarProfissionalPage {

  public id: any;
  public valor:any;

  public endereco: any
  public local:any

  public retornoProfissional: number;
  public dadosRetorno: any;

  public retornoBusca = 0;
  public busca: any;
  public dadosBusca:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private localizacao: LocalizacaoProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,) {

              let loading = this.loadingCtrl.create({
                content : "Localizando profissionais habilitados",
              });

              loading.present();

              localizacao.getStorage().then(id => {
                this.id = id;
                if(id){
                  localizacao.userlocation(id).then((response) => {

                    let retorno = response.json();
                    this.endereco = retorno[0].endereco;
                    this.local = retorno[0].cidade;

                    console.log("local",this.local);
                    console.log("id",id);


                    localizacao.profissionallocation(this.local,this.id).then((response) => {

                        let retorno = response.json();
                        console.log(retorno);

                        if(retorno == ""){
                          console.log('nao tem nenhum cadastro');
                          this.retornoProfissional = 1;
                          loading.dismiss();                          
                        }else{
                          this.retornoProfissional = 2;
                          console.log(response);
                          this.dadosRetorno = response.json();
                          loading.dismiss();
                        }

                    }).catch((response) => {
                      console.log('deu um erro 2 ');
                      loading.dismiss();
                    });

                  }).catch((response) => {
                    console.log('deu um erro');
                    loading.dismiss();
                  });
                }
              });




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizarProfissionalPage');


  }

  perfil(perfil_prof,estabelecimento,telefone,endereco,cidade,estado){

    this.navCtrl.push(PerfilProfissionalPage,{
      "id":perfil_prof,
      "estabelecimento":estabelecimento,
      "telefone":telefone,
      "endereco":endereco,
      "cidade":cidade,
      "estado":estado
    });
  }

  buscar(){
    let validar = this.busca;
    console.log(validar);

    if(!validar){
        console.log("dados nulos");
        this.alertCtrl.create({
          subTitle : "Você não inserir dados para busca",
          buttons : [{
            text: "OK"
          }]
        }).present();
    }else{
        this.localizacao.buscaProfissional(this.busca).then((response) => {


          let valorderetorno = response.json()
          let validacaoRetorno = valorderetorno[0]
            console.log(valorderetorno[0])

              if(!validacaoRetorno){
                  this.alertCtrl.create({
                    subTitle : "Não conseguimos encontrar nenhum profissional para sua busca",
                    buttons : [{
                      text: "OK"
                    }]
                  }).present();
                console.log("retorno nulos");
                this.retornoBusca = 0;
              }else{
                  this.dadosBusca = response.json();
                  this.retornoBusca = 1;
                  console.log("ta dentro do if")
              }
        }).catch((response) => {
          console.log(response.json())
        })
    }


  }

}
