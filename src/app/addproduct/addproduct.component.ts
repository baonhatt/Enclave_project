import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class Addproduct {
  sanpham:any=[{}]
  sanphamhai:any=[{}]
  add="add_content"
  addform="add_form"
  formvalue=""
  timkiem:any=[]
  bodybuttonbackground()
  {
    this.add="add_content add"
    this.addform="add_form add"
  }
  remove(){
    this.add="add_content"
    this.addform="add_form"
    location.reload()
  }
  change(value:any):void
  {
    this.timkiem=[]
    this.sanpham=this.sanphamhai
    for(let i=0;i<this.sanpham.length;i++)
    {
     if (this.sanpham[i].tensp.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1 ||this.sanpham[i].giasp.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1 )
    {
      this.timkiem.push(this.sanpham[i])
    }
    }
    this.sanpham=this.timkiem
  }
  search(value:any)
  { 
    this.timkiem=[]
    this.sanpham=this.sanphamhai
    for(let i=0;i<this.sanpham.length;i++)
    {
     if (this.sanpham[i].tensp.toUpperCase().search(value.search.toUpperCase())!=-1||this.sanpham[i].giasp.toUpperCase().indexOf(value.search.toUpperCase())!=-1)
    {
      this.timkiem.push(this.sanpham[i])
    }
    }
    this.sanpham=this.timkiem
  }
  constructor(private d:DuLieuService){}
  ngOnInit () :void{
  this.sanpham=this.d.getsanpham().subscribe(
    data=>this.sanpham=data,
  )
  this.sanphamhai=this.d.getsanpham().subscribe(
    data=>this.sanphamhai=data
  )
  }
  themsanpham(value:any)
  {
    this.d.postsanpham(value).subscribe(
      data => alert('Thêm Sản phẩm thành công')
    )
    this.formvalue=" "
  }


}