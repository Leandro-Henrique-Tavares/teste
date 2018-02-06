import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NossaVisaoRoutingModule} from './nossa-visao-routing.module';
import {NossaVisaoComponent} from './nossa-visao.component';

@NgModule({
  imports: [
    CommonModule,
    NossaVisaoRoutingModule
  ],
  declarations: [
    NossaVisaoComponent
  ]
})
export class NossaVisaoModule {

}
