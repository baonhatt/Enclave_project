import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class Deleteproduct {
  sanpham:any=[{}]
  sanphamhai:any=[{}]
  timkiem:any=[]
  constructor( private d :DuLieuService){}
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
    xoasanpham(id:any,ten:any){
      if (confirm(`Bạn Muốn Xóa Sản Phẩm ${ten} Có id là ${id}`)==true)
      {
        this.sanpham=this.d.detelesanpham(id).subscribe(
          data=>alert(`Xóa Sản Phẩm ${ten} Có is Là ${id} Thành Công`)
        )
        location.reload()
      }
    }

}