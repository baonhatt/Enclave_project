import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class Deleteproduct {
  sanpham:any=[{}]
  constructor( private d :DuLieuService){}
  ngOnInit():void{
    this.sanpham=this.d.getsanpham().subscribe(
      data=>this.sanpham=data
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