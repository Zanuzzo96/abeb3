import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcPosturaisPage } from '../ac-posturais/ac-posturais';

@IonicPage()
@Component({
  selector: 'page-ac-estrias',
  templateUrl: 'ac-estrias.html',
})
export class AcEstriasPage {

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
  tratamento = this.navParams.get('tratamento');
  data = this.navParams.get('data');
  hora = this.navParams.get('hora');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  estrias = {
    "cor":"",
    "largura":"",
    "tipo":"",
    "quantidade":"",
    "regiao":""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcEstriasPage', this.cliente);
    console.log(this.data)
    console.log(this.hora)
  }

  continuar(){
    this.navCtrl.push(AcPosturaisPage,{
      sexo: this.sexo,
      cliente: this.cliente,
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
      ImcPesoObs: this.ImcPesoObs,
      ImcResultado: this.resultadoImc,
      flacidezTissular: this.flacidezTissular,
      flacidezTlocalidade: this.flacidezTlocalidade,
      flacidezMuscular: this.flacidezMuscular,
      flacidezMlocalidade: this.flacidezMlocalidade,
      estriasCor: this.estrias.cor,
      estriasLargura: this.estrias.largura,
      estriasTipo: this.estrias.tipo,
      estriasQuantidade: this.estrias.quantidade,
      estriasRegiao: this.estrias.regiao,
      tratamento: this.tratamento,
      data:this.data,
      hora:this.hora,
    })
  }

}
