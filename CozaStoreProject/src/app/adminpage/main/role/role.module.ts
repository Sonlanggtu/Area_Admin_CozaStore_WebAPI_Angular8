import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import {Routes, RouterModule} from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
const roleRouters : Routes = [
  {path: '', redirectTo: 'index', pathMatch:'full'},
  {path: 'index', component: RoleComponent}
]
      

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(roleRouters)
  ]
})
export class RoleModule { }
