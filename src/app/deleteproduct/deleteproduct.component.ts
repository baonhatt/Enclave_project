import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class Deleteproduct {
  
  products:any=[{}]
  productsextra:any=[{}]
  searchproduct:any=[]
  constructor( private d :DataService){
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
    
  delete(id:any,name:any)
  {
      if (confirm(`Do You Want Delete Product With Id ${id} And Name is ${name}`)==true)
      {
        this.products=this.d.deteleproduct(id).subscribe
        (
          data=>alert(`Delete Staff With Id ${id} And Name is ${name} Successful`)
        )
        location.reload()
      }
  }

}
