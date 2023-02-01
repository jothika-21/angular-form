import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkerserviceService } from '../workerservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent {
  worker!: FormGroup;
  public submitted = false;
  paramId: any;
  workerobj: any = []
  constructor(private formBuilder: FormBuilder,
    private workerservice: WorkerserviceService,
    private router: Router,
    private activate: ActivatedRoute) { }
  ngOnInit(): void {
    this.worker = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      PhoneNumber: ['', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      Work: ['', Validators.required],
      Address: ['', Validators.required]
    });
    this.paramId = this.activate.snapshot.params['data'];
    if (this.paramId) (
      this.getId()
    )
  }
  get f() {
    return this.worker.controls
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.worker.invalid) {
      return;
    }
    if (this.paramId) {
      this.worker.value.id = this.paramId
      this.workerservice.editworker(this.worker.value, this.paramId).subscribe(
        res => {
          console.log(res);

          this.router.navigate(['/workertable']);
        })
    } else {
      this.workerservice.createworker(this.worker.value).subscribe(
        res => {
          this.router.navigate(['/workertable']);
        })
    }
    console.log(this.worker.value);
  }
  getId() {
    this.workerservice.get1worker(this.paramId).subscribe(
      res => {
        this.workerobj = res
      }
    )
  }
}
