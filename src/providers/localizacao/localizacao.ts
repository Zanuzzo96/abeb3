
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';


@Injectable()
export class LocalizacaoProvider {

  public logId;

  constructor(public http: Http,  public storage: Storage) {
    console.log('Hello LocalizacaoProvider Provider');
  }

  getStorage(){
      return  this.storage.get("id_login");
  }

  userlocation(id) {
    console.log(id);
    let api = 'https://lipolysis.grupoanx.com.br/maps/index.php?user='+id;
    return this.http.get(api).toPromise();
  }

  profissionallocation(cidade){
    console.log(cidade);
    let api = 'https://lipolysis.grupoanx.com.br/maps/index.php?cidade='+cidade;
    return this.http.get(api).toPromise();
  }

}
