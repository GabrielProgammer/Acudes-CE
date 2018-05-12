import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acude } from  '../../models/acude';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.acude = this.navParams.get('acudeSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcudeDetalhePage');
  }

}
