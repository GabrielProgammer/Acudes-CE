import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AcudeProvider } from '../../providers/acude/acude';
import { Acude } from '../../models/acude';
import { AcudeDetalhePage } from '../acude-detalhe/acude-detalhe';
import { FavoritosPage } from '../favoritos/favoritos';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public acudes: Acude[] = Array();
	private qtdAcudes;
  constructor(public navCtrl: NavController, public acProvider: AcudeProvider, public storage: Storage) {
  	this.acProvider.getAcudesAPI().subscribe(resposta => {
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
}
