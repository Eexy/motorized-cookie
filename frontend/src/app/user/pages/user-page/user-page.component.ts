import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'user-pages',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './user-page.component.html',
})
export class UserPageComponent {

}
