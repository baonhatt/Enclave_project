import { Component, OnInit,ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { DuLieuService } from '../du-lieu.service';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};


@Component({
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class Addproduct {
  sanpham:any=[{}]
  sanphamhai:any=[{}]
  add="add_content"
  addform="add_form"
  formvalue=""
  timkiem:any=[]
  bodybuttonbackground()
  {
    this.add="add_content add"
    this.addform="add_form add"
  }
  remove(){
    this.add="add_content"
    this.addform="add_form"
    location.reload()
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
  }
  @ViewChild("chart")
  // chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private d:DuLieuService){
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit () :void{
  this.sanpham=this.d.getsanpham().subscribe(
    data=>this.sanpham=data,
  )
  this.sanphamhai=this.d.getsanpham().subscribe(
    data=>this.sanphamhai=data
  )
  }
  themsanpham(value:any)
  {
    this.d.postsanpham(value).subscribe(
      data => alert('Thêm Sản phẩm thành công')
    )
    this.formvalue=" "
  }


}
