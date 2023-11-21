import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {SigninDto} from "../../../dto/signin.dto";

@Component({
  selector: 'signin-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  signinForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {
    if (this.signinForm.status === "VALID") {
      this.authService.signin(this.signinForm.value as SigninDto)
    }
  }

}
