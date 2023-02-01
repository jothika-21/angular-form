import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerserviceService {
  private url = "https://63a165e9a543280f775523cb.mockapi.io/worker";

  constructor(private http: HttpClient) { }

  createworker(data: any) {
    return this.http.post<any>(this.url, data)
  }
  getworker() {
    return this.http.get<any>(this.url)
  }
  editworker(data:any,id:any){
    return this.http.put<any>(this.url+'/'+ id,data)
  }
  get1worker(id:any){
    return this.http.get<any>(this.url+'/'+id)
  }
  deleteworker(id:any){
    return this.http.delete<any>(this.url+'/'+id)
  }
}