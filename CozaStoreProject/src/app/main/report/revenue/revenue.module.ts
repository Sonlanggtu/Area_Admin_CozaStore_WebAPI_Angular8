import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {RevenueComponent} from './revenue.component'

@NgModule({
  declarations: [RevenueComponent],
  exports: [RevenueComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class RevenueModule { }
