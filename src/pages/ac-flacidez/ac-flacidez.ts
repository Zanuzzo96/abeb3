import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcEstriasPage } from '../ac-estrias/ac-estrias';



@IonicPage()
@Component({
  selector: 'page-ac-flacidez',
  templateUrl: 'ac-flacidez.html',
})
export class AcFlacidezPage {

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

  flacidez = {
    "tissular":"",
    "tissularlocalidade":"",
    "muscular":"",
    "muscularlocalidade":""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcFlacidezPage');
  }

  continuar(){
    this.navCtrl.push(AcEstriasPage,{
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
      ImcPeso: this.imc.peso,
      Imcaltura: this.imc.altura,
      ImcPesoMin: this.imc.pesoMin,
      ImcPesoMax: this.imc.pesoMax,
      ImcPesoObs: this.imc.obs,
      ImcResultado: this.resultadoImc,
      flacidezTissular: this.flacidez.tissular,
      flacidezTlocalidade: this.flacidez.tissularlocalidade,
      flacidezMuscular: this.flacidez.muscular,
      flacidezMlocalidade: this.flacidez.muscularlocalidade,

    })
  }

}
