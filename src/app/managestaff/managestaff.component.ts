import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'managestaff',
  templateUrl: './managestaff.component.html',
  styleUrls: ['./managestaff.component.css']
})
export class Managestaff {
  nhanvien:any=[]
  nhanvienhai:any=[]
  timkiem:any=[]
  id=""
  masonv=""
  hinh=""
  ten=""
  sdt=""
  diachi=""
  chucvu=""
  formvalue=""
  constructor(private d:DuLieuService){}
  ngOnInit():void
  {
    this.nhanvien=this.d.getnhanvien().subscribe
    (
      data=>this.nhanvien=data
    )
    this.nhanvienhai=this.d.getnhanvien().subscribe
    (
      data=>this.nhanvienhai=data
    )
  }
  sua(id:any,masonv:any,hinh:any,ten:any,sdt:any,diachi:any,chucvu:any)
  {
    document.querySelector('.add_content')?.classList.add("add")
    document.querySelector('.addform')?.classList.add("add")
    this.id=id
    this.masonv=masonv
    this.hinh=hinh
    this.ten=ten
    this.sdt=sdt
    this.diachi=diachi
    this.chucvu=chucvu
  }
  xoa(ten:any,id:any)
  {
    if(confirm(`Bạn Muốn Xóa Nhân Viên ${ten} Có id là ${id}`)==true)
    {
    this.nhanvien=this.d.detelenhanvien(id).subscribe
    (
      data=>alert(`Xoá Nhân Viên Có Id là ${id} Và Tên Là ${ten} Thành Công`)
    )
  }
}
  remove()
  {
    document.querySelector('.add_content')?.classList.remove("add")
    document.querySelector('.addform')?.classList.remove("add")
  }
  change(value:any):void
  {
    this.timkiem=[]
    this.nhanvien=this.nhanvienhai
    for(let i=0;i<this.nhanvien.length;i++)
      {
        if (this.nhanvien[i].ten.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1 ||this.nhanvien[i].chucvu.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1  ||this.nhanvien[i].diachi.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1)
          {
            this.timkiem.push(this.nhanvien[i])
          }
      }
    this.nhanvien=this.timkiem
  }
  search(value:any)
  { 
    this.timkiem=[]
    this.nhanvien=this.nhanvienhai
    for(let i=0;i<this.nhanvien.length;i++)
      {
        if (this.nhanvien[i].ten.toUpperCase().search(value.search.toUpperCase())!=-1||this.nhanvien[i].chucvu.toUpperCase().indexOf(value.search.toUpperCase())!=-1 ||this.nhanvien[i].diachi.toUpperCase().indexOf(value.search.toUpperCase())!=-1)
          {
            this.timkiem.push(this.nhanvien[i])
          }
      }
    this.nhanvien=this.timkiem
  }
  suasanpham(value:any)
  {
    this.nhanvien=this.d.editnhanvien(value).subscribe(
      data=>alert("Chỉnh Sửa Nhân Viên Thành Công")
    )
    document.querySelector('.add_content')?.classList.remove("add")
    document.querySelector('.addform')?.classList.remove("add")
    location.reload()
  }
  them()
  {
    document.querySelector('.add_content')?.classList.add("add")
    document.querySelector('.addform')?.classList.add("add")
  }
  themnhanvien(value:any)
  {
    this.d.postnhanvien(value).subscribe
    (
      data => alert('Thêm Nhân Viên Thành Công')
    )
    this.formvalue=" "
    location.reload()
  }
}