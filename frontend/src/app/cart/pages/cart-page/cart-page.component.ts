import {Component, effect} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartListComponent} from "../../components/cart-list/cart-list.component";
import {CartService} from "../../services/cart.service";
import {Product} from "../../../product/types/product";

@Component({
  selector: 'cart-page',
  standalone: true,
  imports: [CommonModule, CartListComponent],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent {
  products: Product[] = []

  constructor(private cartService: CartService) {
    effect(() => {
      this.products = this.cartService.products()
    })
  }

}
