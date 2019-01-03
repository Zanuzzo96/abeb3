import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ac-concluido',
  templateUrl: 'ac-concluido.html',
})
export class AcConcluidoPage {

  public sexo = "M";

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
  ImcPesoMin = this.navParams.get('ImcPesoMin');
  ImcPesoMax = this.navParams.get('ImcPesoMax');
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
  culote = this.navParams.get('culote');
  coxaEsq = this.navParams.get('coxaEsq');
  coxaDir = this.navParams.get('coxaDir');
  panturilhaEsq = this.navParams.get('panturilhaEsq');
  panturilhaDir = this.navParams.get('panturilhaDir');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcConcluidoPage');
    console.log(this.hldgTipo);
    console.log(this.hldgGrau);
    console.log(this.hldgLocal);
    console.log(this.hldgColoracao);
    console.log(this.hldgTemp);
    console.log(this.hldgPalpacao);
    console.log(this.edemaPressao);
    console.log(this.edemaMmii);
    console.log(this.edemaObs);
    console.log(this.lipoGordura);
    console.log(this.lipoDistribuicao);
    console.log(this.lipoLocalizacao);
    console.log(this.lipoBiotipo);
    console.log(this.ImcPeso);
    console.log(this.Imcaltura);
    console.log(this.ImcPesoMin);
    console.log(this.ImcPesoMax);
    console.log(this.ImcPesoObs);
    console.log(this.resultadoImc);
    console.log(this.flacidezTissular);
    console.log(this.flacidezTlocalidade);
    console.log(this.flacidezMuscular);
    console.log(this.flacidezMlocalidade);
    console.log(this.estriasCor);
    console.log(this.estriasLargura);
    console.log(this.estriasTipo);
    console.log(this.estriasQuantidade);
    console.log(this.estriasRegiao);
    console.log(this.posturaisOmbros);
    console.log(this.posturaisColuna);
    console.log(this.posturaisQuadril);
    console.log(this.posturaisJoelhos );
    console.log(this.busto);
    console.log(this.bracoEsquerdo);
    console.log(this.bracoDireito);
    console.log(this.abdomen);
    console.log(this.cintura);
    console.log(this.quadril);
    console.log(this.culote);
    console.log(this.coxaEsq);
    console.log(this.coxaDir);
    console.log(this.panturilhaEsq);
    console.log(this.panturilhaDir);
  }

}
