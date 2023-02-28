import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class Editproduct {
  sanpham:any=[{}]
  add="add_content"
  addform="add_form"
  id=""
  tensp=""
  hinh=""
  mota=""
  giasp=""
  soluong=""
  timkiem:any=[]
  sanphamhai:any=[]
  editproduct(id:any,hinh:any,tensp:any,mota:any,giasp:any,soluong:any)
  {
    this.add="add_content add"
    this.addform="add_form add"
    this.id=id
    this.hinh=hinh
    this.tensp=tensp
    this.mota=mota
    this.giasp=giasp
    this.soluong=soluong
  }
  remove(){
    this.add="add_content"
    this.addform="add_form"
    location.reload()
  }
  constructor(private d:DuLieuService){
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
    console.log(this.sanphamhai)
  }
  ngOnInit():void{
    this.sanpham=this.d.getsanpham().subscribe(
      data=>this.sanpham=data
    )
    this.sanphamhai=this.d.getsanpham().subscribe(
      data=>this.sanphamhai=data
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