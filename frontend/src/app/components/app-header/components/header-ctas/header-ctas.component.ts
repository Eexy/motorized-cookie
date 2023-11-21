import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'header-ctas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-ctas.component.html',
})
export class HeaderCtasComponent {

}
