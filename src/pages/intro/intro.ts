import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../home/home';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
	public userInfo = {nome: '', idade: undefined};
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  cadastraNome(userInfo) {
  	this.storage.set('nomeUser', userInfo.nome).then((res) => console.log(res));
  	this.storage.set('idadeUser', userInfo.idade).then((res) => console.log(res));
  	this.navCtrl.push(HomePage);
  }


}
