import { Component} from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class Addproduct {
  products:any=[{}]
  productsextra:any=[{}]
  formvalue=""
  searchproduct:any=[]
  constructor(private d:DataService){}
  ngOnInit () :void
  {
    this.products=this.d.getproduct().subscribe
    (
      data=>this.products=data,
    )
    this.productsextra=this.d.getproduct().subscribe
    (
      data=>this.productsextra=data
    )
  }
  add()
  {
    document.querySelector('.addproduct-body_background')?.classList.add("add");
    document.querySelector('.addproduct-body_addform')?.classList.add("add"); 
  }
  remove(){
    document.querySelector('.addproduct-body_background')?.classList.remove("add");
    document.querySelector('.addproduct-body_addform')?.classList.remove("add"); 
    location.reload()
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
  addproduct(value:any)
  {
    this.d.postproduct(value).subscribe
    (
      data => alert('Add Product Successful')
    )
    this.formvalue=" "
  }
}