import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupFormComponent} from "./components/signup-form/signup-form.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'signup-pages',
  standalone: true,
  imports: [CommonModule, SignupFormComponent, RouterLink],
  templateUrl: './signup-page.component.html',
})
export class SignupPageComponent {
}
