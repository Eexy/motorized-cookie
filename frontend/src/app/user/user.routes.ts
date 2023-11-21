import {Routes} from "@angular/router";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {authGuard} from "../auth/auth.guard";
import {UserInformationComponent} from "./pages/user-information/user-information.component";
import {UserInvoiceComponent} from "./pages/user-invoice/user-invoice.component";

export const userRoutes: Routes = [
  {
    path: "users",
    component: UserPageComponent,
    canActivate: [authGuard()],
    children: [{
      path: "me",
      component: UserInformationComponent
    },
      {
        path: "invoices",
        component: UserInvoiceComponent
      }]
  }
]
