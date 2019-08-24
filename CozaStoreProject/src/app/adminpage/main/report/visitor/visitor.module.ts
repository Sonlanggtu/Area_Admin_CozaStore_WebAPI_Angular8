import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {VisitorComponent} from './visitor.component'

@NgModule({
  declarations: [VisitorComponent],
  exports: [VisitorComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class VisitorModule { }
