import {Routes} from '@angular/router';
import {authRoutes} from "./auth/auth.routes";
import {userRoutes} from "./user/user.routes";
import {errorRoutes} from "./error/error.routes";
import {homeRoutes} from "./home/home.routes";
import {categoryRoutes} from "./category/category.routes";

export const routes: Routes = [...homeRoutes,
  ...authRoutes,
  ...userRoutes,
  ...categoryRoutes,
  ...errorRoutes
];
