import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from "../../types/product";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: Product

}