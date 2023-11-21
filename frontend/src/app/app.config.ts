import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {provideNgIconsConfig} from "@ng-icons/core";
import {NavService} from "./components/app-header/components/app-nav/nav.service";
import {environment} from "../environments/environment";
import {Category} from "./components/app-header/components/app-nav/category";

export function initializeApp(navService: NavService, http: HttpClient) {
  return async () => {
    console.log("Init")
    if (!environment.production) {
      return navService.setCategories([{id: 1, name: "Short"}])
    }

    return http.get<Category[]>("http://127.0.0.1/categories").subscribe(res => {
      console.info("here")
      navService.setCategories(res)
    })
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideNgIconsConfig({
    size: "1.5em"
  }), {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps: [NavService, HttpClient]
  }]
};
