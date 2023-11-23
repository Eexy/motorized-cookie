import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "../../../product/components/product-list/product-list.component";
import {Product} from "../../../product/types/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'category-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit {
  @Input() category!: string
  products: Product[] = []


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({products}) => {
      this.products = products
    })

  }

}
