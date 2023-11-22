import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "../../../product/components/product-list/product-list.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
