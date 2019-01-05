import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-saude-pg13',
  templateUrl: 'saude-pg13.html',
})
export class SaudePg13Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) { }

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
  problemaOrtopedico = this.navParams.get('problemaOrtopedico');
  problemaOrtopedicoQual = this.navParams.get('problemaOrtopedicoQual');
  tratamentoMedico = this.navParams.get('tratamentoMedico');
  tratamentoMedicoQual = this.navParams.get('tratamentoMedicoQual');
  acidoPelo = this.navParams.get('acidoPelo');
  acidoPeloQuais = this.navParams.get('acidoPeloQuais');
  ortomelecular = this.navParams.get('ortomelecular');
  ortomelecularQual = this.navParams.get('ortomelecularQual');
  cuidadosdiarios = this.navParams.get('cuidadosdiarios');
  cuidadosdiariosQual = this.navParams.get('cuidadosdiariosQual');
  marcapasso = this.navParams.get('marcapasso');
  marcapassoQual = this.navParams.get('marcapassoQual');
  metais = this.navParams.get('metais');
  metaislocal = this.navParams.get('metaislocal');
  cancer = this.navParams.get('cancer');
  cancerQual = this.navParams.get('cancerQual');
  menstrual = this.navParams.get('menstrual');
  menstrualInicio = this.navParams.get('menstrualInicio');
  menstrualFim = this.navParams.get('menstrualFim');
  anticoncepcional = this.navParams.get('anticoncepcional');
  anticoncepcionalQual = this.navParams.get('anticoncepcionalQual');
  varizes = this.navParams.get('varizes');
  varizesGrau = this.navParams.get('varizesGrau');
  lesoes = this.navParams.get('lesoes');
  lesoesQuais = this.navParams.get('lesoesQuais');
  hipertensao = this.navParams.get('hipertensao');
  hipotensao = this.navParams.get('hipotensao');
  epilepsia = this.navParams.get('epilepsia');
  diabetes = this.navParams.get('diabetes');
  autoimune = this.navParams.get('autoimune');
  autoimuneQual = this.navParams.get('autoimuneQual');
  observacao = this.navParams.get('observacao');
  avisar = this.navParams.get('avisar');
  nome = this.navParams.get('nome');
  telefone = this.navParams.get('telefone');
  medico = this.navParams.get('medico');
  telefoneMedico = this.navParams.get('telefoneMedico');
  convenio = this.navParams.get('convenio');
  cart = this.navParams.get('cart');
  hospital = this.navParams.get('hospital');

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaudePg13Page');
  }

  continuar(){

    let saude = {
      "cliente": this.cliente,
      "profissao": this.profissao,
      "temposentado": this.muitotemposentado,
      "qualidadesono": this.qualidadesono,
      "antecendentescirurgicos": this.antecendentesCirurgicos,
      "antecendentescirurgicosquais": this.antecendentesCirurgicosQuais,
      "tratamentoanterior": this.tratamentoAnterior,
      "tratamentoanteriorquais": this.tratamentoAnteriorQuais,
      "antecedenteralergicos":this.antecedenterAlergicos,
      "antecedenteralergicosquais":this.antecedenterAlergicosQuais,
      "funcionamentointestinal":this.funcionamentoIntestinal,
      "funcionamentointestinalobs":this.funcionamentoIntestinalObs,
      "atividadefisica":this.atividadeFisica,
      "atividadefisicaquais":this.atividadeFisicaQuais,
      "fumante":this.fumante,
      "alimentacao":this.alimentacao,
      "alimentacaotipo":this.alimentacaoTipo,
      "ingereliquidos":this.ingereLiquidos,
      "ingereliquidosobs":this.ingereLiquidosObs,
      "liquidosquantos":this.liquidosQuantos,
      "gestante":this.gestante,
      "filhos":this.filhos,
      "filhosquantos":this.filhosQuantos,
      "problemaortopedico":this.problemaOrtopedico,
      "problemaortopedicoqual":this.problemaOrtopedicoQual,
      "tratamentomedico":this.tratamentoMedico,
      "tratamentomedicoqual":this.tratamentoMedicoQual,
      "acidopelo":this.acidoPelo,
      "acidoPeloquais":this.acidoPeloQuais,
      "ortomelecular":this.ortomelecular,
      "ortomelecularqual":this.ortomelecularQual,
      "cuidadosdiarios":this.cuidadosdiarios,
      "cuidadosdiariosqual":this.cuidadosdiariosQual,
      "marcapasso":this.marcapasso,
      "marcapassoqual":this.marcapassoQual,
      "metais":this.metais,
      "metaislocal":this.metaislocal,
      "cancer":this.cancer,
      "cancerqual":this.cancerQual,
      "menstrual":this.menstrual,
      "menstrualinicio":this.menstrualInicio,
      "menstrualfim":this.menstrualFim,
      "anticoncepcional":this.anticoncepcional,
      "anticoncepcionalqual":this.anticoncepcionalQual,
      "varizes":this.varizes,
      "varizesgrau":this.varizesGrau,
      "lesoes":this.lesoes,
      "lesoesquais":this.lesoesQuais,
      "hipertensao":this.hipertensao,
      "hipotensao":this.hipotensao,
      "epilepsia":this.epilepsia,
      "diabetes":this.diabetes,
      "autoimune":this.autoimune,
      "autoimunequal":this.autoimuneQual,
      "observacao":this.observacao,
      "avisar":this.avisar,
      "nome":this.nome,
      "telefone":this.telefone,
      "medico":this.medico,
      "telefonemedico":this.telefoneMedico,
      "convenio":this.convenio,
      "cart":this.cart,
      "hospital":this.hospital,
    }

    console.log(saude);

  let api = 'https://lipolysis.grupoanx.com.br/formulario/saude.php';

  let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post(
      api,
      saude,
      new RequestOptions({ headers: headers })
    ).subscribe(
        res => {
          console.log(res.json())
        },
        err => {
          console.log(err.json())
        }
      );

}

}
