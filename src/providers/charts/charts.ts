import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartsProvider {

  constructor(public http: Http) {}

  buscarDados(){
    return this.http.get("https://lipolysis.grupoanx.com.br/profissional/grafico.php").toPromise();
  }



}
