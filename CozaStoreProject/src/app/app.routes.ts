import { Routes } from "@angular/router";
import {AuthGuard} from '../app/adminpage/core/guards/auth.guard';
export const appRoutes: Routes = [
    { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
    { path: 'admin/login', loadChildren: './adminpage/login/login.module#LoginModule' },
    {path: 'admin/main', loadChildren: './adminpage/main/main.module#MainModule', canActivate:[AuthGuard]}
]