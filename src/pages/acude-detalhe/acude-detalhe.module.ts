import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcudeDetalhePage } from './acude-detalhe';

@NgModule({
  declarations: [
    AcudeDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AcudeDetalhePage),
  ],
})
export class AcudeDetalhePageModule {}
