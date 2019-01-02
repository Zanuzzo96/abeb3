import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcFlacidezPage } from '../ac-flacidez/ac-flacidez';

/**
 * Generated class for the AcResultadoImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  altura : number = parseFloat(this.navParams.get('Imcaltura'));
  Peso: number = parseFloat(this.navParams.get('ImcPeso'));
  public calculo: any;

  resultadoImc = 19;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcResultadoImcPage');
    console.log(this.altura);

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
  }

  continuar(){
    this.navCtrl.push(AcFlacidezPage)
  }

}
