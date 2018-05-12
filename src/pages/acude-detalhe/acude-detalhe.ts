import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Acude } from  '../../models/acude';
import { Storage } from '@ionic/storage';
import { AcudeProvider } from '../../providers/acude/acude';

/**
 * Generated class for the AcudeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acude-detalhe',
  templateUrl: 'acude-detalhe.html',
})
export class AcudeDetalhePage {
	private acude: Acude;
	private favorito;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
  				public toastCtrl: ToastController, public acProvider: AcudeProvider) {
  	this.acude = this.navParams.get('acudeSelecionado');
  	
  	storage.get('favorito'+this.acude.nome).then((resultado) => {
  		this.favorito = resultado;
  	});	
  }

  showToast(message) {
  	let toast = this.toastCtrl.create({
        message: message,
        duration: 1500,
        position: 'bottom',
        //cssClass: 'toast'
    });
    toast.present(toast);
  }

  addFavorito() {
  	this.storage.set('favorito' + this.acude.nome, true).then((result) => {
  		this.favorito = result;
  		this.acProvider.getFavoritos();
  		this.showToast('Adicionado aos favoritos!');
  	});
  }

  remFavorito() {
  	this.storage.set('favorito' + this.acude.nome, false).then((result) => {
  		this.favorito = result;
  		this.acProvider.getFavoritos();
  		this.showToast('Removido dos favoritos!');
  	});
  }
}
