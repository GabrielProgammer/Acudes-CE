import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AcudeProvider } from '../../providers/acude/acude';

/**
 * Generated class for the ConfigsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configs',
  templateUrl: 'configs.html',
})
export class ConfigsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public storage: Storage, public acProvider: AcudeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigsPage');
  }

  apagarFavs() {
  	let qtdFavs: number = this.acProvider.favoritos.length;
  	console.log(qtdFavs);

  	if (qtdFavs > 0)
	  	for (let i = 0; i < qtdFavs; i++){
	  		if (qtdFavs - i == 1 ) //Evita chamar a funcão getFavoritos a cada iteração		
	  			this.storage.set('favorito'+this.acProvider.favoritos[i].nome, false)
	  				.then((res) => {this.acProvider.getFavoritos(); console.log('LAST!')});
	  		else 
	  			this.storage.set('favorito'+this.acProvider.favoritos[i].nome, false);
	  	}
	else 
		this.acProvider.showToast('Primeiro adicione pelo menos 1 favorito :D');
  }
}
