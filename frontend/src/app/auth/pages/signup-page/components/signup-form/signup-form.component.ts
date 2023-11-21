import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../../../services/auth-service.service";
import {SignupDto} from "../../../../dto/signup.dto";

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  signupForm = this.fb.nonNullable.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(5)]],
    lastName: ["", Validators.required],
    gender: ["", Validators.required]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {
    if (this.signupForm.status === "VALID") {
      this.authService.signup(this.signupForm.value as SignupDto)
    }
  }

}
