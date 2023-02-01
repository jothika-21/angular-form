import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  password: any
  showPassword = false;
  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;
  iconClass!: string;

  constructor(private formBuilder: FormBuilder,
    private router:Router) {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required],

    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.value != ''){
      this.router.navigate(['/signin'])
    }else{
      this.router.navigate
    }
    console.log(this.loginForm.value);
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordInput.nativeElement.type = 'text';
      this.iconClass = 'bx-hide';
    } else {
      this.passwordInput.nativeElement.type = 'password';
      this.iconClass = 'bx-show';
    }
  }
}
