import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroShoppingCart} from "@ng-icons/heroicons/outline";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'cart-btn',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  providers: [provideIcons({heroShoppingCart})],
  templateUrl: './cart-btn.component.html',
})
export class CartBtnComponent {

}
