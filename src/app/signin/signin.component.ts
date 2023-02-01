import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  Signin: FormGroup;
  submitted = false;
  public password: any;
  confirmpassword:any
  public showPassword: boolean = false;
  public Password: boolean = false;
  @ViewChild('passwordInput', { static: false }) passwordInput!: ElementRef;
  @ViewChild('passwordInput1', { static: false }) passwordInput1!: ElementRef;
  iconClass!: string;
  isPasswordVisible = false;
  isPasswordVisibled = false;
  iconClass1!: string;
  passwordsMatch = true;
  

  constructor(private formBuilder: FormBuilder,
    private router:Router) {
    this.Signin = this.formBuilder.group({
      fname:['', Validators.required],
      lname:['', Validators.required],
      emailId: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required],      
      confirmpassword:['', Validators.required]
    });
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.Signin.controls
  }
  checkPasswordsMatch() {
    const passwordInput = document.getElementById('form2Example27') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('form2Example') as HTMLInputElement;
    this.passwordsMatch = passwordInput.value === confirmPasswordInput.value;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.Signin.invalid) {
      return;
    }
    if(this.Signin.value != ''){
      this.router.navigate(['/register'])
    }else{
      this.router.navigate
    }
    console.log(this.Signin.value);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    if (this.isPasswordVisible) {
      this.passwordInput.nativeElement.type = 'text';
      this.iconClass = ' fa-eye';
    } else {
      this.passwordInput.nativeElement.type = 'password';
      this.iconClass = 'fa-eye-slash';
    }
  }
  togglePasswordVisibility1() {
    this.isPasswordVisibled = !this.isPasswordVisibled;
    if (this.isPasswordVisibled) {
      this.passwordInput1.nativeElement.type = 'text';
      this.iconClass1 = ' fa-eye';
    } else {
      this.passwordInput1.nativeElement.type = 'password';
      this.iconClass1 = 'fa-eye-slash';
    }
  }
  
}
