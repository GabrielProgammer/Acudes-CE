import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acude } from '../../models/acude';

/**
 * Generated class for the FotoSlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto-slide',
  templateUrl: 'foto-slide.html',
})
export class FotoSlidePage {
	private acudeFoto: Acude;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.acudeFoto  = this.navParams.get('fotoAcude');
  	console.log(this.acudeFoto);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoSlidePage');
  }

}
