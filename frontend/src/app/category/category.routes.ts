import {Routes, UrlSegment} from "@angular/router";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";

export const categoryRoutes: Routes = [
  {
    matcher: (url) => {
      if (url[0].path === "category") {
        return {consumed: url, posParams: {category: new UrlSegment(url[1].path, {})}}
      }

      return null;
    },
    component: CategoryPageComponent
  }
]
