
import { Component,OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class Manageproduct implements OnInit {
  sanpham:any=[]
  constructor( private d:DuLieuService){
  }
  ngOnInit() :void 
  {
    this.sanpham=this.d.getsanpham().subscribe(
  data=> this.sanpham=data)
  }
}