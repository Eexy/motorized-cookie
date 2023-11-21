import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'signin-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin-form.component.html',
})
export class SigninFormComponent {
  signinForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  })

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.log(this.signinForm.getRawValue())
  }

}
