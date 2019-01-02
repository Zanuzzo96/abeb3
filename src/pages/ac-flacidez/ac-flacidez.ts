import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcEstriasPage } from '../ac-estrias/ac-estrias';



@IonicPage()
@Component({
  selector: 'page-ac-flacidez',
  templateUrl: 'ac-flacidez.html',
})
export class AcFlacidezPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  flacidez = {
    "tissular":"",
    "tissularlocalidade":"",
    "muscular":"",
    "muscularlocalidade":""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcFlacidezPage');
  }

  continuar(){
    this.navCtrl.push(AcEstriasPage)
  }

}
