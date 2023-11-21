import {Routes} from "@angular/router";
import {UserPageComponent} from "./page/user-page/user-page.component";
import {authGuard} from "../auth/auth.guard";

export const userRoutes: Routes = [
  {
    path: "users/me",
    component: UserPageComponent,
    canActivate: [authGuard()],
    title: "user"
  }
]
