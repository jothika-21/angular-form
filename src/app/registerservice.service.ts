import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private url = "https://63a165e9a543280f775523cb.mockapi.io/teacher";

  constructor(private http: HttpClient) { }

  createteacher(data: any) {
    return this.http.post<any>(this.url, data)
  }
  getteacher() {
    return this.http.get<any>(this.url)
  }
  editteacher(data:any,id:any){
    return this.http.put<any>(this.url+'/'+ id,data)
  }
  get1teacher(id:any){
    return this.http.get<any>(this.url+'/'+id)
  }
  deleteteacher(id:any){
    return this.http.delete<any>(this.url+'/'+id)
  }
}
