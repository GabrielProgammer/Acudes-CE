import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acude } from '../../models/acude';
import { AcudeProvider } from '../../providers/acude/acude';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public acProvider: AcudeProvider) {
  	this.favoritos = acProvider.favoritos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

}
