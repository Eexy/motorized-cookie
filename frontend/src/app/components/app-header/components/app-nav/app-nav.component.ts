import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavService} from "./nav.service";
import {Category} from "./category";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-nav.component.html',
})
export class AppNavComponent {
  categories: Category[] = []

  constructor(private navService: NavService) {
    this.categories = this.navService.categories
    console.info(this.categories)
  }

}
