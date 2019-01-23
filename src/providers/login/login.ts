import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

    validarLogin(login : string , senha : string) {

      console.log(login);
      let api = 'https://lipolysis.grupoanx.com.br/login.php?login=' + login + '&senha=' + senha;

      return this.http.get(api).toPromise();
    }

    recuperarSenha(cpf: number, nasc: any){
      let api = 'https://lipolysis.grupoanx.com.br/recuperarSenha.php?cpf=' + cpf + '&nasc=' + nasc;
      return this.http.get(api).toPromise();
    }


}
