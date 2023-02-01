import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from '../registerservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  Register!: FormGroup;
  public submitted = false;
  teacherobj: any = []
  paramId: any;
  constructor(private formBuilder: FormBuilder,
    private registerservice: RegisterserviceService,
    private router: Router,
    private activate: ActivatedRoute) { }
  ngOnInit(): void {
    this.Register = this.formBuilder.group({
      names: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      emailId: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      qualification: ['', Validators.required],
      experience: ['', Validators.required]
    });
    this.paramId = this.activate.snapshot.params['data'];
    if (this.paramId) (
      this.getId()
    )
  }

  get f() {
    return this.Register.controls
  }

  onSubmit() {
    this.submitted = true;
    if (this.Register.invalid) {
      return;
    }
    if (this.paramId) {
      this.Register.value.id = this.paramId
      this.registerservice.editteacher(this.Register.value, this.paramId).subscribe(
        res => {
          console.log(res);

          this.router.navigate(['/table']);
        })
    } else {
      this.registerservice.createteacher(this.Register.value).subscribe(
        res => {
          this.router.navigate(['/table']);
        })
    }
  }
  getId() {
    this.registerservice.get1teacher(this.paramId).subscribe(
      res => {
        this.teacherobj = res
      }
    )
  }
}
