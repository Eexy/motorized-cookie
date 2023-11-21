import {Routes} from '@angular/router';
import {authRoutes} from "./auth/auth.routes";
import {userRoutes} from "./user/user.routes";
import {errorRoutes} from "./error/error.routes";

export const routes: Routes = [
  ...authRoutes,
  ...userRoutes,
  ...errorRoutes
];
