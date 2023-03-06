import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class Editproduct {
  products:any=[{}]
  searchproduct:any=[]
  productsextra:any=[]
  id=""
  name=""
  img=""
  des=""
  price=""
  quantity=""
  editproduct(id:any,img:any,name:any,des:any,price:any,quantity:any)
  {
    document.querySelector('.editproduct-body_background')?.classList.add("add");
    document.querySelector('.editproduct-body_addform')?.classList.add("add"); 
    this.id=id
    this.img=img
    this.name=name
    this.des=des
    this.price=price
    this.quantity=quantity
  }
  remove()
  {
    document.querySelector('.addproduct-body_background')?.classList.remove("add");
    document.querySelector('.addproduct-body_addform')?.classList.remove("add"); 
    location.reload()
  }
  constructor(private d:DataService)
  {
  }
  change(value:any):void
  {
    this.searchproduct=[]
    this.products=this.productsextra
    for(let i=0;i<this.products.length;i++)
      {
        if (this.products[i].name.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1 ||this.products[i].price.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1 )
          {
            this.searchproduct.push(this.products[i])
          }
      }
    this.products=this.searchproduct
  }
  search(value:any)
  { 
    this.searchproduct=[]
    this.products=this.productsextra
    for(let i=0;i<this.products.length;i++)
      {
        if (this.products[i].name.toUpperCase().search(value.search.toUpperCase())!=-1||this.products[i].price.toUpperCase().indexOf(value.search.toUpperCase())!=-1)
          {
            this.searchproduct.push(this.products[i])
          }
      }
    this.products=this.searchproduct
  }
  ngOnInit():void
  {
    this.products=this.d.getproduct().subscribe
    (
      data=>this.products=data
    )
    this.productsextra=this.d.getproduct().subscribe
    (
      data=>this.productsextra=data
    )
  }
  suasanpham(sanpham:any)
  {
    this.d.editproduct(sanpham).subscribe
    (
      data=> alert('Edit Product Successful')
    )
      this.id=""
      this.name=""
      this.img=""
      this.des=""
      this.price=""
      this.quantity=""
  }
}