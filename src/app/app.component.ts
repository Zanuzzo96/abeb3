import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
//import { AAdicionardicaPage } from '../pages/a-adicionardica/a-adicionardica';
//import { AcInicioPage } from '../pages/ac-inicio/ac-inicio';
//import { AdminPage } from '../pages/admin/admin';
//import { SeInicioPage } from '../pages/se-inicio/se-inicio';
//import { UHomePage } from '../pages/u-home/u-home';
//import { SeEnergiaPage } from '../pages/se-energia/se-energia';
//import { ProfissionalPage } from '../pages/profissional/profissional';
//import { SaudePg1Page } from '../pages/saude-pg1/saude-pg1';
//import { LocalizarProfissionalPage } from '../pages/localizar-profissional/localizar-profissional';
//import { UsuarioPage } from '../pages/usuario/usuario';
//import { UPerfilPage } from '../pages/u-perfil/u-perfil';
import { ASorteiosPage } from '../pages/a-sorteios/a-sorteios';
import { ADicasPage } from '../pages/a-dicas/a-dicas';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = SplashScreenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#4e4940');
      statusBar.show();
      splashScreen.hide();

    });
  }
}
