import {Component, effect} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Category} from "../../../components/app-header/components/app-nav/category";
import {NavService} from "../../services/nav.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'nav-panel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-panel.component.html',
})
export class NavPanelComponent {
  open = false;
  categories: Category[] = []

  constructor(private navService: NavService) {
    this.categories = this.navService.categories
    effect(() => {
      this.open = this.navService.openNavPanel()
    })
  }

  toggleOpen(val: boolean) {
    this.open = val
  }
}
