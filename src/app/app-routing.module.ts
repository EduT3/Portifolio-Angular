import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componentes/about/about.component';
import { MainComponent } from './componentes/main/main.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/main',
    pathMatch:'full'

  },  {
    path:'**',
    redirectTo: '/main',
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
