import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]
