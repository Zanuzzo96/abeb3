import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the RcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RcProvider {

  constructor(public http: Http) {
    console.log('Hello RcProvider Provider');
  }

  verificarRegistro(registro : number) {
    console.log(registro);
    let api = 'https://lipolysis.grupoanx.com.br/rc/index.php?registro='+registro;

    return this.http.get(api).toPromise();
  }

}
