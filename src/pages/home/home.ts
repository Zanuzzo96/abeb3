import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NivelContaRegistroPage } from '../nivel-conta-registro/nivel-conta-registro';
import { Network } from  '@ionic-native/network';
import { AlertaInternetPage } from '../alerta-internet/alerta-internet';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private  network:  Network) {}


  GoLogin() {
    this.navCtrl.push(LoginPage);
  }

  CriarConta() {
    this.navCtrl.push(NivelContaRegistroPage);
  }

}
