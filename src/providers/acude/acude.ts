import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acude } from '../../models/acude';
import 'rxjs/add/operator/map';

/*
  Generated class for the AcudeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AcudeProvider {
	public apiKey: string;
  constructor(public http: HttpClient) {
  	this.apiKey = 'http://localhost:3000/acude';
  }

  getAcudesAPI() {
  	return this.http.get<Acude[]>(this.apiKey);
  }
}
