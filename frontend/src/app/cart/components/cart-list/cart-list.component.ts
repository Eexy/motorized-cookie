import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartItemComponent} from "../cart-item/cart-item.component";
import {Product} from "../../../product/types/product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'cart-list',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input() products: Product[] = []

  constructor(private cartService: CartService) {
  }


}
