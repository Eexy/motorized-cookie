import {Routes, UrlSegment} from "@angular/router";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";

export const categoryRoutes: Routes = [
  {
    matcher: (url) => {
      console.info(url)
      if (url[0].path === "category") {
        return {consumed: url, posParams: {category: new UrlSegment(url[1].path.slice(1), {})}}
      }

      return null;
    },
    component: CategoryPageComponent
  }
]
