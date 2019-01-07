import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ProfissionalPage } from '../profissional/profissional';


@IonicPage()
@Component({
  selector: 'page-ac-concluido',
  templateUrl: 'ac-concluido.html',
})
export class AcConcluidoPage {

  sexo = this.navParams.get('sexo');
  cliente = this.navParams.get('cliente');
  hldgTipo = this.navParams.get('hldgTipo');
  hldgGrau = this.navParams.get('hldgGrau');
  hldgLocal = this.navParams.get('hldgLocal');
  hldgColoracao = this.navParams.get('hldgColoracao');
  hldgTemp = this.navParams.get('hldgTemp');
  hldgPalpacao = this.navParams.get('hldgPalpacao');
  edemaPressao = this.navParams.get('edemaPressao');
  edemaMmii = this.navParams.get('edemaMmii');
  edemaObs = this.navParams.get('edemaObs');
  lipoGordura = this.navParams.get('lipoGordura');
  lipoDistribuicao = this.navParams.get('lipoDistribuicao');
  lipoLocalizacao = this.navParams.get('lipoLocalizacao');
  lipoBiotipo = this.navParams.get('lipoBiotipo');
  ImcPeso = this.navParams.get('ImcPeso');
  Imcaltura = this.navParams.get('Imcaltura');
  ImcPesoObs = this.navParams.get('ImcPesoObs');
  resultadoImc = this.navParams.get('ImcResultado');
  flacidezTissular = this.navParams.get('flacidezTissular');
  flacidezTlocalidade = this.navParams.get('flacidezTlocalidade');
  flacidezMuscular = this.navParams.get('flacidezMuscular');
  flacidezMlocalidade = this.navParams.get('flacidezMlocalidade');
  estriasCor = this.navParams.get('estriasCor');
  estriasLargura = this.navParams.get('estriasLargura');
  estriasTipo = this.navParams.get('estriasTipo');
  estriasQuantidade = this.navParams.get('estriasQuantidade');
  estriasRegiao = this.navParams.get('estriasRegiao');
  posturaisOmbros = this.navParams.get('posturaisOmbros');
  posturaisColuna = this.navParams.get('posturaisColuna');
  posturaisQuadril = this.navParams.get('posturaisQuadril');
  posturaisJoelhos = this.navParams.get('posturaisJoelhos');
  busto = this.navParams.get('busto');
  bracoEsquerdo = this.navParams.get('bracoEsquerdo');
  bracoDireito = this.navParams.get('bracoDireito');
  abdomen = this.navParams.get('abdomen');
  cintura = this.navParams.get('cintura');
  quadril = this.navParams.get('quadril');
  coxaEsq = this.navParams.get('coxaEsq');
  coxaDir = this.navParams.get('coxaDir');
  panturilhaEsq = this.navParams.get('panturilhaEsq');
  panturilhaDir = this.navParams.get('panturilhaDir');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,) {

      console.log(this.cliente);
  }

  ac = {
    "cliente": this.cliente,
    "hldgTipo": this.hldgTipo,
    "hldgGrau": this.hldgGrau,
    "hldgLocal": this.hldgLocal,
    "hldgColoracao": this.hldgColoracao,
    "hldgTemp": this.hldgTemp,
    "hldgPalpacao": this.hldgPalpacao,
    "edemaPressao": this.edemaPressao,
    "edemaMmii": this.edemaMmii,
    "edemaObs": this.edemaObs,
    "lipoGordura": this.lipoGordura,
    "lipoDistribuicao": this.lipoDistribuicao,
    "lipoLocalizacao": this.lipoLocalizacao,
    "lipoBiotipo": this.lipoBiotipo,
    "ImcPeso": this.ImcPeso,
    "Imcaltura": this.Imcaltura,
    "ImcPesoObs": this.ImcPesoObs,
    "ImcResultado": this.resultadoImc,
    "flacidezTissular": this.flacidezTissular,
    "flacidezTlocalidade": this.flacidezTlocalidade,
    "flacidezMuscular": this.flacidezMuscular,
    "flacidezMlocalidade": this.flacidezMlocalidade,
    "estriasCor": this.estriasCor,
    "estriasLargura": this.estriasLargura,
    "estriasTipo": this.estriasTipo,
    "estriasQuantidade": this.estriasQuantidade,
    "estriasRegiao": this.estriasRegiao,
    "posturaisOmbros" : this.posturaisOmbros,
    "posturaisColuna" : this.posturaisColuna,
    "posturaisQuadril" : this.posturaisQuadril,
    "posturaisJoelhos" : this.posturaisJoelhos,
    "busto": this.busto,
    "bracoEsquerdo": this.bracoEsquerdo,
    "bracoDireito": this.bracoDireito,
    "abdomen": this.abdomen,
    "cintura": this.cintura,
    "quadril": this.quadril,
    "coxaEsq": this.coxaEsq,
    "coxaDir": this.coxaDir,
    "panturilhaEsq": this.panturilhaEsq,
    "panturilhaDir": this.panturilhaDir,
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcConcluidoPage', this.cliente);
  }

  continuar(){
    let api = 'https://lipolysis.grupoanx.com.br/formulario/corporal.php';
    let headers: Headers = new Headers();
      headers.append('Content-type','application/json');
      console.log(this.ac)
      return this.http.post(
        api,
        this.ac,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log(res.json());

            let retorno = res.json()

          if(retorno == "sucesso"){
            this.navCtrl.push(ProfissionalPage)
          }

          },
          err => {

            console.log(err.json());

          }

      );
  }

}
