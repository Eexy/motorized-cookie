import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "../../../product/components/product-list/product-list.component";
import {ProductService} from "../../../product/services/product.service";
import {Product} from "../../../product/types/product";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProductsByCategory().subscribe((products) => {
      this.products = products
    })
  }
}
