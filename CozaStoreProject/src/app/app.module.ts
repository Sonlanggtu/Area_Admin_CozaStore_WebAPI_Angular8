import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { appRoutes } from './app.routes';
import {AuthGuard} from '../app/adminpage/core/guards/auth.guard';
import {DataService} from '../app/adminpage/core/services/data.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';
import { TreeDraggedElement } from 'angular-tree-component';
import { SimpleTinyModule } from './adminpage/shared/simple-tiny/simple-tiny.module';
import { PageComponent } from './website/page/page.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    SimpleTinyModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [AuthGuard,HttpClient, DataService,TreeDraggedElement],
  bootstrap: [AppComponent]
})
export class AppModule { }
