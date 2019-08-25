import { Routes } from "@angular/router";
import {AuthGuard} from '../app/adminpage/core/guards/auth.guard';
import { PageComponent } from './website/page/page.component';
export const appRoutes: Routes = [
    { path: '', component:PageComponent },
   // { path: '', loadChildren: './website/page/page.module#PageModule' },
    { path: 'admin/login', loadChildren: './adminpage/login/login.module#LoginModule' },
    {path: 'admin/main', loadChildren: './adminpage/main/main.module#MainModule', canActivate:[AuthGuard]}
]