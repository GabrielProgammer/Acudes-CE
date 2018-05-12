import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FotoSlidePage } from './foto-slide';

@NgModule({
  declarations: [
    FotoSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(FotoSlidePage),
  ],
})
export class FotoSlidePageModule {}
