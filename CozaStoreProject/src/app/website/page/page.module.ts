import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import {pageRoutes} from './page.routes';
import {HomepageModule} from './homepage/homepage.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    HomepageModule,
    RouterModule.forChild(pageRoutes)
  ]
})
export class PageModule { }
