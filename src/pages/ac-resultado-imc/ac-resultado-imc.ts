import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcFlacidezPage } from '../ac-flacidez/ac-flacidez';

@IonicPage()
@Component({
  selector: 'page-ac-resultado-imc',
  templateUrl: 'ac-resultado-imc.html',
})
export class AcResultadoImcPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcResultadoImcPage');

    console.log(this.resultadoImc);

  }

  continuar(){
    this.navCtrl.push(AcFlacidezPage,{
      hldgTipo: this.hldgTipo,
      hldgGrau: this.hldgGrau,
      hldgLocal: this.hldgLocal,
      hldgColoracao: this.hldgColoracao,
      hldgTemp: this.hldgTemp,
      hldgPalpacao: this.hldgPalpacao,
      edemaPressao: this.edemaPressao,
      edemaMmii: this.edemaMmii,
      edemaObs: this.edemaObs,
      lipoGordura: this.lipoGordura,
      lipoDistribuicao: this.lipoDistribuicao,
      lipoLocalizacao: this.lipoLocalizacao,
      lipoBiotipo: this.lipoBiotipo,
      ImcPeso: this.ImcPeso,
      Imcaltura: this.Imcaltura,
      ImcPesoMin: this.ImcPesoMin,
      ImcPesoMax: this.ImcPesoMax,
      ImcPesoObs: this.ImcPesoObs,
      ImcResultado: this.resultadoImc
    })
  }

}
