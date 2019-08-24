import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {Routes, RouterModule} from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
 const userRoutes : Routes = [
    {path: '', redirectTo: 'index' , pathMatch: 'full'},
    {path: 'index', component: UserComponent}
]

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    MultiselectDropdownModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: []
})
export class UserModule { }
