import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DicaProvider {

  constructor(public http: Http) {
    console.log('Hello DicaProvider Provider');
  }

  dicasFree(){
    let api = 'https://lipolysis.grupoanx.com.br/dica/dica.php?dica=1';
    return this.http.get(api).toPromise();
  }

  dicasPremium(){
    let api = 'https://lipolysis.grupoanx.com.br/dica/dica.php?dica=2';
    return this.http.get(api).toPromise();
  }

}
