import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Product} from "../../product/types/product";
import {EMPTY, Observable} from "rxjs";
import {inject} from "@angular/core";
import {ProductService} from "../../product/services/product.service";

export const categoryResolver: ResolveFn<Product[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> => {
  const productService = inject(ProductService)

  if (route.url.length < 2) return EMPTY

  const category = route.url[1].path

  if (!category.length) return EMPTY


  return productService.getProductsByCategory(category)
}
