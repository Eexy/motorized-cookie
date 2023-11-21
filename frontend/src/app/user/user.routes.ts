import {Routes} from "@angular/router";
import {UserPageComponent} from "./page/user-page/user-page.component";

export const userRoutes: Routes = [
  {
    path: "users/me",
    component: UserPageComponent,
    title: "user"
  }
]
