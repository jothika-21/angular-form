import { Component, OnInit } from '@angular/core';
import { WorkerserviceService } from '../workerservice.service';

@Component({
  selector: 'app-workertable',
  templateUrl: './workertable.component.html',
  styleUrls: ['./workertable.component.scss']
})
export class WorkertableComponent implements OnInit {
  worker:any
  constructor (private service:WorkerserviceService){}
  ngOnInit(): void {
    this.get()
  }
  get(){
    this.service.getworker().subscribe(
      res => {
        this.worker=res
      }
    )
  }
  delete(id:any){
    this.service.deleteworker(id).subscribe(
      res =>{
        this.get()
      }
    )
  }
}

