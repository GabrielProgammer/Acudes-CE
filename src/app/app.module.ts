import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcudeProvider } from '../providers/acude/acude';
import { AcudeDetalhePage } from '../pages/acude-detalhe/acude-detalhe';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { SearchPipe } from '../pipes/search/search';
import { FotoSlidePage } from '../pages/foto-slide/foto-slide';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { IntroPage } from '../pages/intro/intro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcudeDetalhePage,
     SearchPipe,
    FavoritosPage,
    FotoSlidePage,
    MeuPerfilPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcudeDetalhePage,
    FavoritosPage,
    FotoSlidePage,
    MeuPerfilPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AcudeProvider
  ]
})
export class AppModule {}
