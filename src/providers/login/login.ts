import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

    validarLogin(login : string , senha : string) {

      console.log(login);
      let api = 'https://lipolysis.grupoanx.com.br/login/index.php?login=' + login + '&senha=' + senha;

      return this.http.get(api).toPromise();
    }

    recuperarSenha(cpf: number, nasc: any){
      let api = 'https://lipolysis.grupoanx.com.br/login/index.php?cpf=' + cpf + '&nasc=' + nasc;
      return this.http.get(api).toPromise();
    }


}
