import {Routes} from "@angular/router";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";

export const errorRoutes: Routes = [
  {
    path: "**",
    component: NotFoundPageComponent
  }
]
