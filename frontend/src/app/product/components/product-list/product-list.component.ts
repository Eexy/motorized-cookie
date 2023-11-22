import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "../product-card/product-card.component";
import {ProductService} from "../../services/product.service";
import {Product} from "../../types/product";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[] = []

  constructor(private productService: ProductService) {
    this.productService.getProductsByCategory().subscribe((products) => {
      this.products = products
    })
  }
}
