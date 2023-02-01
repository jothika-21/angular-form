import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  Register:any
  constructor (private service:RegisterserviceService){}
  ngOnInit(): void {
    this.get()
  }
  get(){
    this.service.getteacher().subscribe(
      res => {
        this.Register=res
      }
    )
  }
  delete(id:any){
    this.service.deleteteacher(id).subscribe(
      res =>{
        this.get()
      }
    )
  }
}
