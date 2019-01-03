import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { Http, Headers,Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProfissionalPage } from '../profissional/profissional';


@IonicPage()
@Component({
  selector: 'page-imagem-sessao',
  templateUrl: 'imagem-sessao.html',
})
export class ImagemSessaoPage {

  img1:any;
  imagem:any;
  cliente = this.navParams.get('id_user');
  id_tratamento = this.navParams.get('id_tratamento');


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    public camera: Camera,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
   ) {

     console.log(this.cliente)
     console.log(this.id_tratamento)

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagemSessaoPage');
  }

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;
      let file: File = fileList[0];
      console.log(file);
  }

  uploadImg(){
    console.log(this.img1);
    console.log(this.cliente)
    console.log(this.id_tratamento)

    let imagem = {
      "imagem":this.img1,
      "id_user":this.cliente,
      "id_tratamento":this.id_tratamento
    }

    let loading = this.loadingCtrl.create({
      content : "Inserindo imagem",
    });

    loading.present();

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/imagem/uploadProfissional.php',
        imagem,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {

            let retorno = res.json();

            if( retorno == "sucesso"){
              loading.dismiss();
              let alerta = this.alertCtrl.create({
                subTitle : "Imagem inserida com sucesso",
                buttons : [{
                  text: "OK",
                  handler: () => {
                     this.navCtrl.push(ProfissionalPage)
                   }
                }]
              }).present();
            }else if ( retorno == "erro"){
              loading.dismiss();

              let alerta_erro = this.alertCtrl.create({
                title: 'Ops .. Algo deu errado',
                subTitle : "Tivemos um problema para inserir imagem.",
                buttons : [{
                  text: "OK",
                }]
              }).present();
            }
          },
          err => {

            console.log(err.json());
            loading.dismiss();

          }
        );
    }

}
