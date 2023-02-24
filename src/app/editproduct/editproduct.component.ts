import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class Editproduct {
  sanpham:any=[{}]
  them="add_content"
  them1="form"
  id=""
  tensp=""
  hinh=""
  mota=""
  giasp=""
  soluong=""
  thien(id:any,hinh:any,tensp:any,mota:any,giasp:any,soluong:any)
  {
    this.them="add_content them"
    this.them1="form them"
    this.id=id
    this.hinh=hinh
    this.tensp=tensp
    this.mota=mota
    this.giasp=giasp
    this.soluong=soluong
  }
  an(){
    this.them="add_content"
    this.them1="form"
    location.reload()
  }
  constructor(private d:DuLieuService){
  }
  ngOnInit():void{
    this.sanpham=this.d.getsanpham().subscribe(
      data=>this.sanpham=data
    )
  }
  suasanpham(sanpham:any){
    this.d.editsanpham(sanpham).subscribe(
      data=> alert('Sửa Sản Phẩm Thành Công')
    )
      this.id=""
      this.tensp=""
      this.hinh=""
      this.mota=""
      this.giasp=""
      this.soluong=""
  
  }
}