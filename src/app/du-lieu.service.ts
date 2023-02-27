import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor( private h:HttpClient) { }
  getsanpham()
  {
    return this.h.get('http://localhost:3000/sanpham')
  }
  postsanpham(sp:any)
  {
    return this.h.post('http://localhost:3000/sanpham', sp)
  }
  detelesanpham(id:any)
  {
    return this.h.delete('http://localhost:3000/sanpham/'+id)
  }
  editsanpham(sp:any){
    return this.h.put('http://localhost:3000/sanpham/'+sp.id,sp)
  }
  getnhanvien(){
    return this.h.get('http://localhost:3000/nhanvien')
  }
  postnhanvien(sp:any){
    return this.h.post('http://localhost:3000/nhanvien', sp)
  }
  editnhanvien(sp:any)
  {
    return this.h.put('http://localhost:3000/nhanvien/'+sp.id,sp)
  }
  detelenhanvien(id:any)
  {
    return this.h.delete('http://localhost:3000/nhanvien/'+id)
  }
  getadmin(){
    return this.h.get('http://localhost:3000/Admin')
  }
}
