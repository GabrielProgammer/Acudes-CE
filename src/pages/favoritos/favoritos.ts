import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acude } from '../../models/acude';
import { AcudeProvider } from '../../providers/acude/acude';
import { Storage } from '@ionic/storage';

import { AcudeDetalhePage } from '../acude-detalhe/acude-detalhe';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
	private favoritos: Acude[] = Array();
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public acProvider: AcudeProvider, public storage: Storage) {
  	this.favoritos = acProvider.favoritos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  remFavorito(acude) {
  	console.log(acude);
  	this.storage.set('favorito'+acude, false).then((result) => 
  		this.favoritos = this.acProvider.getFavoritos());
  	this.acProvider.showToast('Removido dos favoritos!');
  }

	infoAcudeSelecionado(x) {
		this.navCtrl.push(AcudeDetalhePage, {acudeSelecionado: x});
	}
}
