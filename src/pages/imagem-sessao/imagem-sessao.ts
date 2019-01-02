import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { Http, Headers,Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-imagem-sessao',
  templateUrl: 'imagem-sessao.html',
})
export class ImagemSessaoPage {

  img1:any;
  imagem:any


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    public camera: Camera,
    public http: Http
   ) {

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

    let imagem = {
      "imagem":this.img1
    }

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json');

      this.http.post(
        'https://lipolysis.grupoanx.com.br/imagem/uploadProfissional.php',
        imagem,
        new RequestOptions({ headers: headers })
      ).subscribe(
          res => {
            console.log("retorno da api");
            console.log(res.json());
          },
          err => {

            console.log(err.json());

          }
        );

    //const fileTransfer: FileTransferObject = this.transfer.create();

    // Upload a file:
    //fileTransfer.upload(..).then(..).catch(..);

    // Download a file:
    //fileTransfer.download(..).then(..).catch(..);

    // Abort active transfer:
    //fileTransfer.abort();

    // full example

    //  let options: FileUploadOptions = {
        // fileKey: 'file',
        // fileName: 'name.jpg',
        // headers: {}
    //  }

    //  fileTransfer.upload('', '', options)
      // .then((data) => {
         // success
      // }, (err) => {
         // error
      // });
    }

}
