import { Routes } from "@angular/router";
import {AuthGuard} from '../app/adminpage/core/guards/auth.guard';
export const appRoutes: Routes = [
    { path: '', redirectTo: '/page', pathMatch: 'full' },
    { path: 'page', loadChildren: './website/page/page.module#PageModule' },
    { path: 'admin/login', loadChildren: './adminpage/login/login.module#LoginModule' },
    {path: 'admin/main', loadChildren: './adminpage/main/main.module#MainModule', canActivate:[AuthGuard]}
]