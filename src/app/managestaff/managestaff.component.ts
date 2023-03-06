import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'managestaff',
  templateUrl: './managestaff.component.html',
  styleUrls: ['./managestaff.component.css']
})
export class Managestaff {
  staffs:any=[]
  staffextra:any=[]
  searchstaff:any=[]
  id=""
  code=""
  img=""
  name=""
  phone=""
  address=""
  position=""
  formvalue=""
  constructor(private d:DataService){}
  ngOnInit():void
  {
    this. staffs=this.d.getstaff().subscribe
    (
      data=>this. staffs=data
    )
    this. staffextra=this.d.getstaff().subscribe
    (
      data=>this. staffextra=data
    )
  }
  edit(id:any,code:any,img:any,name:any,phone:any,address:any,position:any)
  {
    document.querySelector('.add_content')?.classList.add("add")
    document.querySelector('.addform')?.classList.add("add")
    this.id=id
    this.code=code
    this.img=img
    this.name=name
    this.phone=phone
    this.address=address
    this.position=position
  }
  delete(name:any,id:any)
  {
    if(confirm(`Do You Want Delete Staff With Id ${id} And Name Is ${name}`)==true)
    {
      this. staffs=this.d.detelestaff(id).subscribe
        (
          data=>alert(`Delete Staff With Id ${id} And Name Is ${name} Successful`)
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
    this.searchstaff=[]
    this. staffs=this. staffextra
    for(let i=0;i<this. staffs.length;i++)
      {
        if (this. staffs[i].name.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1 ||this. staffs[i].position.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1  ||this. staffs[i].address.toUpperCase().indexOf(value.target.value.toUpperCase())!=-1)
          {
            this.searchstaff.push(this. staffs[i])
          }
      }
    this. staffs=this.searchstaff
  }
  search(value:any)
  { 
    this.searchstaff=[]
    this. staffs=this. staffextra
    for(let i=0;i<this.staffs.length;i++)
      {
        if (this.staffs[i].name.toUpperCase().search(value.search.toUpperCase())!=-1||this.staffs[i].position.toUpperCase().indexOf(value.search.toUpperCase())!=-1 ||this.staffs[i].address.toUpperCase().indexOf(value.search.toUpperCase())!=-1)
          {
            this.searchstaff.push(this.staffs[i])
          }
      }
    this.staffs=this.searchstaff
  }
  editstaff(value:any)
  {
    this.staffs=this.d.editstaff(value).subscribe(
      data=>alert("Edit Staff Successful ")
    )
    document.querySelector('.add_content')?.classList.remove("add")
    document.querySelector('.addform')?.classList.remove("add")
    location.reload()
  }
  add()
  {
    document.querySelector('.add_content')?.classList.add("add")
    document.querySelector('.addform')?.classList.add("add")
  }
  addstaff(value:any)
  {
    this.d.poststaff(value).subscribe
    (
      data => alert('Add Staff Successful')
    )
    this.formvalue=" "
    location.reload()
  }
}