import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { AcudeProvider } from '../../providers/acude/acude';
import { Acude } from '../../models/acude';
import { AcudeDetalhePage } from '../acude-detalhe/acude-detalhe';
import { FavoritosPage } from '../favoritos/favoritos';
import { Storage } from '@ionic/storage';
import { MeuPerfilPage } from '../meu-perfil/meu-perfil';
import { ConfigsPage } from '../configs/configs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public acudes: Acude[] = Array();
	private qtdAcudes;
  private load;

  constructor(public navCtrl: NavController, public acProvider: AcudeProvider,
     public storage: Storage, public loadingCtrl: LoadingController) {
    this.load = this.loadingCtrl.create({
     content: 'Obtendo a lista de açudes, por favor aguarde...'
   });
   this.load.present();

   this.storage.set('nomeUser', 'Gabriel').then((res) => console.log(res));

  	this.acProvider.getAcudesAPI().subscribe(resposta => {
      this.load.dismiss();
  		this.acudes = resposta; 
  		console.log(this.acudes);
  		this.acProvider.getFavoritos();
  	});
  }

  infoAcudeSelecionado(x) {
  	this.navCtrl.push(AcudeDetalhePage, {acudeSelecionado: x});
  }

  favoritosPage() {
  	this.navCtrl.push(FavoritosPage);
  }

  meuPerfil() {
    this.navCtrl.push(MeuPerfilPage);
  }

  configuracoes() {
    this.navCtrl.push(ConfigsPage);
  }
}
