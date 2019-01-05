import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudePg8Page } from '../saude-pg8/saude-pg8';

@IonicPage()
@Component({
  selector: 'page-saude-pg7',
  templateUrl: 'saude-pg7.html',
})
export class SaudePg7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  cliente = this.navParams.get('cliente');
  sexo = this.navParams.get('sexo');
  profissao = this.navParams.get('profissao');
  muitotemposentado = this.navParams.get('muitotemposentado');
  qualidadesono = this.navParams.get('qualidadesono');
  antecendentesCirurgicos = this.navParams.get('antecendentesCirurgicos');
  antecendentesCirurgicosQuais = this.navParams.get('antecendentesCirurgicosQuais');
  tratamentoAnterior = this.navParams.get('tratamentoAnterior');
  tratamentoAnteriorQuais = this.navParams.get('tratamentoAnteriorQuais');
  antecedenterAlergicos = this.navParams.get('antecedenterAlergicos');
  antecedenterAlergicosQuais = this.navParams.get('antecedenterAlergicosQuais');
  funcionamentoIntestinal = this.navParams.get('funcionamentoIntestinal');
  funcionamentoIntestinalObs = this.navParams.get('funcionamentoIntestinalObs');
  atividadeFisica = this.navParams.get('atividadeFisica');
  atividadeFisicaQuais = this.navParams.get('atividadeFisicaQuais');
  fumante = this.navParams.get('fumante');
  alimentacao = this.navParams.get('alimentacao');
  alimentacaoTipo = this.navParams.get('alimentacaoTipo');
  ingereLiquidos = this.navParams.get('ingereLiquidos');
  ingereLiquidosObs = this.navParams.get('ingereLiquidosObs');
  liquidosQuantos = this.navParams.get('liquidosQuantos');
  gestante = this.navParams.get('gestante');
  filhos = this.navParams.get('filhos');
  filhosQuantos = this.navParams.get('filhosQuantos');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg7Page');
  }

  algumproblemaortopedico;
  qualproblemaortopedico;
  tratamentoMedico;
  tratamentoMedicoQual;
  acidoPelo;
  acidoPeloQuais;
  ortomelecular;
  ortomelecularQual;


  continuar(){

    console.log(this.cliente);
    console.log(this.sexo);
    console.log(this.profissao);
    console.log(this.muitotemposentado);
    console.log(this.qualidadesono);
    console.log(this.antecendentesCirurgicos);
    console.log(this.antecendentesCirurgicosQuais);
    console.log(this.tratamentoAnterior);
    console.log(this.tratamentoAnteriorQuais);
    console.log(this.antecedenterAlergicos);
    console.log(this.antecedenterAlergicosQuais);
    console.log(this.funcionamentoIntestinal);
    console.log(this.funcionamentoIntestinalObs);
    console.log(this.atividadeFisica);
    console.log(this.atividadeFisicaQuais);
    console.log(this.fumante);
    console.log(this.alimentacao);
    console.log(this.alimentacaoTipo);
    console.log(this.ingereLiquidos);
    console.log(this.ingereLiquidosObs);
    console.log(this.liquidosQuantos);
    console.log(this.gestante);
    console.log(this.filhos);
    console.log(this.filhosQuantos);
    console.log(this.algumproblemaortopedico);
    console.log(this.qualproblemaortopedico);
    console.log(this.tratamentoMedico);
    console.log(this.tratamentoMedicoQual);
    console.log(this.acidoPelo);
    console.log(this.acidoPeloQuais);
    console.log(this.ortomelecular);
    console.log(this.ortomelecularQual);


    this.navCtrl.push(SaudePg8Page,{
      cliente: this.cliente,
      sexo: this.sexo,
      profissao: this.profissao,
      muitotemposentado: this.muitotemposentado,
      qualidadesono: this.qualidadesono,
      antecendentesCirurgicos: this.antecendentesCirurgicos,
      antecendentesCirurgicosQuais: this.antecendentesCirurgicosQuais,
      tratamentoAnterior: this.tratamentoAnterior,
      tratamentoAnteriorQuais: this.tratamentoAnteriorQuais,
      antecedenterAlergicos: this.antecedenterAlergicos,
      antecedenterAlergicosQuais: this.antecedenterAlergicosQuais,
      funcionamentoIntestinal: this.funcionamentoIntestinal,
      funcionamentoIntestinalObs: this.funcionamentoIntestinalObs,
      atividadeFisica: this.atividadeFisica,
      atividadeFisicaQuais: this.atividadeFisicaQuais,
      fumante: this.fumante,
      alimentacao: this.alimentacao,
      alimentacaoTipo: this.alimentacaoTipo,
      ingereLiquidos: this.ingereLiquidos,
      ingereLiquidosObs: this.ingereLiquidosObs,
      liquidosQuantos: this.liquidosQuantos,
      gestante: this.gestante,
      filhos: this.filhos,
      filhosQuantos: this.filhosQuantos,

      problemaOrtopedico: this.algumproblemaortopedico,
      problemaOrtopedicoQual: this.qualproblemaortopedico,
      tratamentoMedico: this.tratamentoMedico,
      tratamentoMedicoQual: this.tratamentoMedicoQual,
      acidoPelo: this.acidoPelo,
      acidoPeloQuais: this.acidoPeloQuais,
      ortomelecular: this.ortomelecular,
      ortomelecularQual: this.ortomelecularQual,
    })
  }

}
