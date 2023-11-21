import {Routes} from "@angular/router";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {SigninPageComponent} from "./pages/signin-page/signin-page.component";

export const authRoutes: Routes = [{
  path: "auth/signup",
  component: SignupPageComponent
}, {
  path: "auth/signin",
  component: SigninPageComponent
}]
