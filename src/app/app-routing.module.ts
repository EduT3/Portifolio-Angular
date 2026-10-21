import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./componentes/about/about.component";
import { MainComponent } from "./componentes/main/main.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainComponent,
    title: "Eduardo Tomilhero | Dados e BI",
  },
  {
    path: "about",
    component: AboutComponent,
    title: "Trajetória | Eduardo Tomilhero",
  },
  {
    path: "**",
    redirectTo: "/main",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
