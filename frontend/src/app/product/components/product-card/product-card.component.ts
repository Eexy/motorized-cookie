import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../../types/product";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroPlus} from "@ng-icons/heroicons/outline";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({heroPlus})],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: Product

  constructor(private cartService: CartService) {
  }

  onClick() {
    this.cartService.addProductToCart(this.product)
  }

}
