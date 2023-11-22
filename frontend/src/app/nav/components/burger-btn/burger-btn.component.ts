import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroBars3} from "@ng-icons/heroicons/outline";
import {NavService} from "../../services/nav.service";

@Component({
  selector: 'burger-btn',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({heroBars3})],
  templateUrl: './burger-btn.component.html',
})
export class BurgerBtnComponent {

  constructor(private navService: NavService) {
  }

  handleBtnClick() {
    this.navService.openNavPanel.set(!this.navService.openNavPanel())
  }

}
