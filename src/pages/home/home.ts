import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcudeProvider } from '../../providers/acude/acude';
import { Acude } from '../../models/acude';
import { AcudeDetalhePage } from '../acude-detalhe/acude-detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public acudes: Acude[] = Array();
  constructor(public navCtrl: NavController, public acProvider: AcudeProvider) {
  	this.acProvider.getAcudesAPI().subscribe(resposta => {this.acudes = resposta; console.log(this.acudes);});
  }

  infoAcudeSelecionado(x) {
  	this.navCtrl.push(AcudeDetalhePage, {acudeSelecionado: x});
  }
}
