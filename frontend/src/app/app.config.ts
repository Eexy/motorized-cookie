import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {provideNgIconsConfig} from "@ng-icons/core";
import {NavService} from "./nav/services/nav.service";
import {Category} from "./components/app-header/components/app-nav/category";
import {tap} from "rxjs";

export function initializeApp(navService: NavService, http: HttpClient) {
  return () => {
    return http.get<Category[]>("http://127.0.0.1:3000/categories").pipe(tap(res => {
      navService.setCategories(res)
    }))
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideHttpClient(), provideNgIconsConfig({
    size: "24px",

  }), {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps: [NavService, HttpClient]
  }]
};
