import { Routes } from "@angular/router";
import {PageComponent} from './page.component';

export const pageRoutes: Routes = [
    {
        path:'', component: PageComponent, children:[
            {path: '', redirectTo: '/homepage', pathMatch: 'full'},
            {path: 'homepage', loadChildren:'./homepage/homepage.module#HomepageModule'},
        ]
    }
]

