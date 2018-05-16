import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Usuario } from '../../models/usuario';
import { AcudeProvider } from '../../providers/acude/acude';

/**
 * Generated class for the MeuPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meu-perfil',
  templateUrl: 'meu-perfil.html',
})
export class MeuPerfilPage {
	public userInfo: Usuario = {
		nome: '',
		qtdFavoritos: null,
		avatar: 'avatar.png',
    idade: null,
    id: null
	};
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public storage: Storage, public acProvider: AcudeProvider) {
  	this.storage.get("nomeUser").then((res) => {this.userInfo.nome = res;});
  	this.userInfo.qtdFavoritos =  this.acProvider.favoritos.length;
    this.storage.get("idadeUser").then((res) => this.userInfo.idade = res);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MeuPerfilPage');
  }

}
