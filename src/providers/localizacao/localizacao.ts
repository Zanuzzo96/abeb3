
import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';


@Injectable()
export class LocalizacaoProvider {

  constructor(public http: Http,  public storage: Storage) {}

  getStorage(){
      return  this.storage.get("id_cadastro");
  }

  userlocation(id) {
    console.log(id);
    let api = 'https://lipolysis.grupoanx.com.br/usuario/localizarProfissional.php?user='+id;
    return this.http.get(api).toPromise();
  }

  profissionallocation(cidade){
    let api = 'https://lipolysis.grupoanx.com.br/usuario/localizarProfissional.php?cidade='+ cidade;
    return this.http.get(api).toPromise();
  }

  buscaProfissional(busca){
    let api = 'https://lipolysis.grupoanx.com.br/usuario/localizarProfissional.php?busca='+ busca;
    return this.http.get(api).toPromise();
  }

}
