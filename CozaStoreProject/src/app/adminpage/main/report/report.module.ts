import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueModule } from './revenue/revenue.module';
import { VisitorModule } from './visitor/visitor.module';
import { ReportRouter } from './report.routes';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsModule,
    RevenueModule,
    VisitorModule,
    ReportRouter
  ]
})
export class ReportModule { }
