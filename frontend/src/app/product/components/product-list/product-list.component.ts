import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from "../product-card/product-card.component";
import {Product} from "../../types/product";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input() products: Product[] = []

  constructor() {
  }
}
