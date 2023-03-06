
import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class Manageproduct implements OnInit {
  sanpham:any=[]
  timkiem:any=[]
  sanphamhai:any=[]
  constructor( private d:DuLieuService){
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
  ngOnInit() :void 
  {
    this.sanpham=this.d.getsanpham().subscribe(
  data=> this.sanpham=data)
  this.sanphamhai=this.d.getsanpham().subscribe(
    data=>this.sanphamhai=data
  )
  }
}