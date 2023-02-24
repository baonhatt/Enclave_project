import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class Addproduct {
  sanpham:any=[{}]
  them="add_content"
  them1="form"
  giatri=""
  thien()
  {
    this.them="add_content them"
    this.them1="form them"
  }
  an(){
    this.them="add_content"
    this.them1="form"
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
    this.giatri=" "
  }


}