import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';
import { PerfilProfissionalPage } from '../perfil-profissional/perfil-profissional';
import { MensagemPage } from '../mensagem/mensagem';


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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private localizacao: LocalizacaoProvider) {


              localizacao.getStorage().then(id => {
                if(id){
                  localizacao.userlocation(id).then((response) => {

                    let retorno = response.json();
                    this.endereco = retorno[0].endereco;
                    this.local = retorno[0].cidade;
                    console.log(this.local);

                    this.localizacao.profissionallocation(this.local).then((response) => {

                      let retorno = response.json();
                      console.log(retorno);

                      if(retorno == ""){
                        console.log('nao tem nenhum cadastro');
                        this.retornoProfissional = 1;
                      }else{
                        this.retornoProfissional = 2;
                        console.log(response);
                        this.dadosRetorno = response.json();
                      }

                    }).catch((response) => {
                      console.log('deu um erro 2 ');
                    });

                  }).catch((response) => {
                    console.log('deu um erro');
                  });
                }
              });




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalizarProfissionalPage');

  }

  mensagem(id_prof){
    console.log(id_prof)
    this.navCtrl.push(MensagemPage,{
      "id":id_prof
    })

  }

  perfil(perfil_prof,estabelecimento,telefone,endereco,cidade,estado){
    console.log(perfil_prof)
    console.log(estabelecimento)
    console.log(telefone)
    console.log(endereco)
    console.log(cidade)
    console.log(estado)

    this.navCtrl.push(PerfilProfissionalPage,{
      "id":perfil_prof,
      "estabelecimento":estabelecimento,
      "telefone":telefone,
      "endereco":endereco,
      "cidade":cidade,
      "estado":estado
    });
  }

}
