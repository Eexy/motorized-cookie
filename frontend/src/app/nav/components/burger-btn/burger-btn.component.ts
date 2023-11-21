import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroBars3} from "@ng-icons/heroicons/outline";

@Component({
  selector: 'burger-btn',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({heroBars3})],
  templateUrl: './burger-btn.component.html',
})
export class BurgerBtnComponent {

}
