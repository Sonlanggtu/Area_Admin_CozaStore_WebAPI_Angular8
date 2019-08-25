import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {Routes, RouterModule} from '@angular/router'

const homepageRoutes: Routes = [
  { path: '', component: HomepageComponent },
]
@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homepageRoutes)
  ]
})
export class HomepageModule { }
