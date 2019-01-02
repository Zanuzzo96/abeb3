import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcFlacidezPage } from '../ac-flacidez/ac-flacidez';
import { AcResultadoImcPage } from '../ac-resultado-imc/ac-resultado-imc';

AcResultadoImcPage

@IonicPage()
@Component({
  selector: 'page-ac-imc',
  templateUrl: 'ac-imc.html',
})
export class AcImcPage {

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

  public imc = {
    "peso":"",
    "altura":"",
    "pesoMin":"",
    "pesoMax":"",
    "resultado":"",
    "obs":""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcImcPage');
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
  }

  continuar(){
    this.navCtrl.push(AcResultadoImcPage,{
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
    })
  }

}
