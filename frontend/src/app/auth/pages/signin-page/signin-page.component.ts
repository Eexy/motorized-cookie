import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupFormComponent} from "../signup-page/components/signup-form/signup-form.component";
import {SigninFormComponent} from "./signin-form/signin-form.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'signin-pages',
  standalone: true,
  imports: [CommonModule, SignupFormComponent, SigninFormComponent, RouterLink],
  templateUrl: './signin-page.component.html',
})
export class SigninPageComponent {

}
