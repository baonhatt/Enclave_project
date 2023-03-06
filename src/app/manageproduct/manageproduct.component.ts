
import { Component,OnInit,ViewChild } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";


export type ChartOptions = {
  series: any
  chart: any;
  responsive: any;
  stroke:any;
  labels: any;
  color:any;
};

@Component({
  selector: 'manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class Manageproduct implements OnInit {
  sanpham:any=[]
  timkiem:any=[]
  sanphamhai:any=[]
  a:any
  b:any
  c:any
  e:any
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOpt!: Partial<ChartOptions>;
  public Chartcolumn!: Partial<ChartOptions>;
  constructor(private d:DuLieuService){
    this.chartOpt = {
      series:this.a,
      chart: {
        type: "polarArea",
      },
      labels: this.b,
      responsive: [
        {
          breakpoint: 2000,
          options: {
            chart: {
              width:500,
              height: 600,
              backgroundColor: ["fff"]
            },
            stroke: {
              colors: ["#fff"]
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
  }
}
thienthai()
{
  document.querySelector('.hienmanhinhden')?.classList.remove('hienmanhinhden')
  document.querySelector('.chart')?.classList.remove('hienmanhinhden2')
  document.querySelector('.chart1')?.classList.remove('hienmanhinhden2')
  document.querySelector('.chart2')?.classList.remove('hienmanhinhden2')
}
hoatran()
  {
    this.a = this.sanphamhai.map((data:any) => Number(data.giasp))
    this.b = this.sanphamhai.map((data:any) => (data.tensp))
    document.querySelector('.manhinhden')?.classList.add('hienmanhinhden')
    document.querySelector('.chart')?.classList.add('hienmanhinhden2')
  }

  hoatran1()
  {
    this.c = this.sanphamhai.map((data:any) => Number(data.soluong))
    this.b = this.sanphamhai.map((data:any) => (data.tensp))
    document.querySelector('.manhinhden')?.classList.add('hienmanhinhden')
    document.querySelector('.chart1')?.classList.add('hienmanhinhden2') 
  }

  hoatran2()
  {
    this.e = this.sanphamhai.map((data:any) => Number(data.sldaban))
    this.b = this.sanphamhai.map((data:any) => (data.tensp))
    document.querySelector('.manhinhden')?.classList.add('hienmanhinhden')
    document.querySelector('.chart2')?.classList.add('hienmanhinhden2')
    
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
    this.sanpham=this.d.getsanpham().subscribe
    (
      data=> this.sanpham=data
    )
  this.sanphamhai=this.d.getsanpham().forEach
  (
    data=> this.sanphamhai=data
  )
  }
}