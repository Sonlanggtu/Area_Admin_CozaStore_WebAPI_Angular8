import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTinyComponent } from './simple-tiny.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SimpleTinyComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ SimpleTinyComponent],
  providers: []
})

export class SimpleTinyModule { }