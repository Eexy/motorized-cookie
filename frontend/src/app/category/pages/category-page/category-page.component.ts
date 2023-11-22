import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "../../../product/components/product-list/product-list.component";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../product/types/product";
import {ProductService} from "../../../product/services/product.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'category-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit {
  @Input() category!: string
  products: Product[] = []


  constructor(private http: HttpClient, private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.productService.getProductsByCategory(val.url.split("/")[2]).subscribe((products) => {
          this.products = products
        })
      }
    })
  }

}
