import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupFormComponent} from "./components/signup-form/signup-form.component";

@Component({
  selector: 'signup-page',
  standalone: true,
  imports: [CommonModule, SignupFormComponent],
  templateUrl: './signup-page.component.html',
})
export class SignupPageComponent {

}
