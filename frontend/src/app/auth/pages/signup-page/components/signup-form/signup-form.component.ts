import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  signupForm = this.fb.group({
    firstname: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(5)]],
    lastname: ["", Validators.required],
    gender: ["", Validators.required]
  })

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.log(this.signupForm.getRawValue())
  }

}
