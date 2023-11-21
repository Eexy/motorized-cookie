import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroUser} from "@ng-icons/heroicons/outline";

@Component({
  selector: 'header-ctas',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent
  ],
  providers: [provideIcons({heroUser})],
  templateUrl: './header-ctas.component.html',
})
export class HeaderCtasComponent {

}
