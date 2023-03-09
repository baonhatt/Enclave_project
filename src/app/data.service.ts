import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private h:HttpClient) { }
  getproduct()
  {
    return this.h.get('http://localhost:3000/product')
  }
  postproduct(sp:any)
  {
    return this.h.post('http://localhost:3000/product', sp)
  }
  deteleproduct(id:any)
  {
    return this.h.delete('http://localhost:3000/product/'+id)
  }
  editproduct(sp:any){
    return this.h.put('http://localhost:3000/product/'+sp.id,sp)
  }
  getstaff(){
    return this.h.get('http://localhost:3000/staff')
  }
  poststaff(sp:any){
    return this.h.post('http://localhost:3000/staff', sp)
  }
  editstaff(sp:any)
  {
    return this.h.put('http://localhost:3000/staff/'+sp.id,sp)
  }
  detelestaff(id:any)
  {
    return this.h.delete('http://localhost:3000/staff/'+id)
  }
  getadmin(){
    return this.h.get('http://localhost:3000/Admin')
  }
}
