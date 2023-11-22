import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavService} from "../../services/nav.service";
import {Category} from "../../../components/app-header/components/app-nav/category";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  categories: Category[] = []

  constructor(private navService: NavService) {
    this.categories = this.navService.categories
  }

}
