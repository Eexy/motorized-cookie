import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../../../product/types/product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() product!: Product

  constructor(private cartService: CartService) {

  }

  onClick() {
    this.cartService.removeProductFromCart(this.product.id)
  }

}
