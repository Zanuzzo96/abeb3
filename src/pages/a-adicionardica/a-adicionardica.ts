import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


import { Http, Headers,Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the AAdicionardicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-adicionardica',
  templateUrl: 'a-adicionardica.html',
})
export class AAdicionardicaPage {

  img1:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AAdicionardicaPage');
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
        'https://lipolysis.grupoanx.com.br/dica/dica.php',
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
  }
}
