import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { UserModule } from './user/user.module';
import {HomeModule} from './home/home.module';
import {SidebarMenuComponent} from '../shared/sidebar-menu/sidebar-menu.component';
import {TopMenuComponent} from '../shared/top-menu/top-menu.component'
import {SignalrService} from '../core/services/signalr.service';
import { RevenueModule } from './report/revenue/revenue.module';
import {ConfirmPasswordValidate} from '../shared/validate/confirm_password.directive';
@NgModule({
  declarations: [MainComponent,
    SidebarMenuComponent,
    TopMenuComponent,
    ConfirmPasswordValidate
  ],
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RevenueModule,
    RouterModule.forChild(mainRoutes),

    
  ],
  exports:[
    CommonModule,
    UserModule,
    HomeModule
  ],
  providers:[SignalrService]
})
export class MainModule { }
