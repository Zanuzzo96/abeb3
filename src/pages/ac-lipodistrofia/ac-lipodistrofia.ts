import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcImcPage } from '../ac-imc/ac-imc';

/**
 * Generated class for the AcLipodistrofiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ac-lipodistrofia',
  templateUrl: 'ac-lipodistrofia.html',
})
export class AcLipodistrofiaPage {

  hldgTipo = this.navParams.get('hldgTipo');
  hldgGrau = this.navParams.get('hldgGrau');
  hldgLocal = this.navParams.get('hldgLocal');
  hldgColoracao = this.navParams.get('hldgColoracao');
  hldgTemp = this.navParams.get('hldgTemp');
  hldgPalpacao = this.navParams.get('hldgPalpacao');
  edemaPressao = this.navParams.get('edemaPressao');
  edemaMmii = this.navParams.get('edemaMmii');
  edemaObs = this.navParams.get('edemaObs');

  public lipodistrofia = {
    "gordura":"",
    "distribuicao":"",
    "localizacao":"",
    "biotipo":""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcLipodistrofiaPage');
    console.log(this.hldgTipo);
    console.log(this.hldgGrau);
    console.log(this.hldgLocal);
    console.log(this.hldgColoracao);
    console.log(this.hldgTemp);
    console.log(this.hldgPalpacao);
    console.log(this.edemaPressao);
    console.log(this.edemaMmii);
    console.log(this.edemaObs);
  }

  continuar(){
    this.navCtrl.push(AcImcPage,{
      hldgTipo: this.hldgTipo,
      hldgGrau: this.hldgGrau,
      hldgLocal: this.hldgLocal,
      hldgColoracao: this.hldgColoracao,
      hldgTemp: this.hldgTemp,
      hldgPalpacao: this.hldgPalpacao,
      edemaPressao: this.edemaPressao,
      edemaMmii: this.edemaMmii,
      edemaObs: this.edemaObs,
      lipoGordura: this.lipodistrofia.gordura,
      lipoDistribuicao: this.lipodistrofia.distribuicao,
      lipoLocalizacao: this.lipodistrofia.localizacao,
      lipoBiotipo: this.lipodistrofia.biotipo,
    })


  }

}
