import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acude } from '../../models/acude';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AcudeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AcudeProvider {
	public apiKey: string;
	public acudes: Acude[] = Array();
	public favoritos: Acude[] = Array();
  constructor(public http: HttpClient, public storage: Storage) {
  	this.apiKey = 'https://demo7908592.mockable.io/acudes';
  	this.getAcudesAPI().subscribe(res => {this.acudes = res});
  }

  getAcudesAPI() {
  	return this.http.get<Acude[]>(this.apiKey);
  }

  getFavoritos() {
  	let qtdAcudes = this.acudes.length;
  	this.favoritos = Array();

  	for (let i = 0; i < qtdAcudes; i++) {
  			this.storage.get('favorito'+ this.acudes[i].nome).then((resposta) => {
  				if (resposta)
  					this.favoritos.push(this.acudes[i]);
  			}) 
  		}
  		console.log(this.favoritos);
  		return this.favoritos;
  }
}
