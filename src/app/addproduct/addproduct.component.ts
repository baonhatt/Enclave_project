import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class Addproduct {
  sanpham:any=[{}]
  add="add_content"
  addform="add_form"
  formvalue=""
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
  constructor(private d:DuLieuService){}
  ngOnInit () :void{
  this.sanpham=this.d.getsanpham().subscribe(
    data=>this.sanpham=data
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