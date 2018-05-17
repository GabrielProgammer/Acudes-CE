import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../home/home';
import { AcudeProvider } from '../../providers/acude/acude';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage, public acProvider: AcudeProvider) {
  }

  ionViewDidLoad() {
    this.storage.set('slideVisto', true);
  }

  cadastraNome(userInfo) {
    if (userInfo.nome != '' && userInfo.idade != undefined) {
      this.storage.set('nomeUser', userInfo.nome).then((res) => console.log(res));
      this.storage.set('idadeUser', userInfo.idade).then((res) => console.log(res));
      this.navCtrl.setRoot(HomePage);
    }
      
    else if (userInfo.nome == '' && userInfo.idade == null)
      this.acProvider.showToast('Por favor preencha todos os campos!');
    else if (userInfo.nome == '') 
      this.acProvider.showToast('O nome de usuário não está definido!')
    else if (userInfo.idade == null)
      this.acProvider.showToast('A idade não está definida');
   
  }
}
