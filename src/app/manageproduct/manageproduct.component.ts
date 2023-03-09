
import { Component,OnInit,ViewChild } from '@angular/core';
import { DataService } from '../data.service';

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
  products:any=[]
  searchproduct:any=[]
  productextra:any=[]
  price:any
  name:any
  quantity:any
  sold:any
  id:any
  img:any
  names:any
  des:any
  prices:any
  quantitys:any
  solds:any
  review:any
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOpt!: Partial<ChartOptions>;
  public Chartcolumn!: Partial<ChartOptions>;
  constructor(private d:DataService){
    this.chartOpt = {
      series:this.price,
      chart: {
        type: "polarArea",
      },
      labels: this.name,
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
remove()
  {
    document.querySelector('.blackground')?.classList.remove('addblackground')
    document.querySelector('.chart-content_price')?.classList.remove('addchart')
    document.querySelector('.chart-content_quantity')?.classList.remove('addchart')
    document.querySelector('.chart-content_sold')?.classList.remove('addchart')
    document.querySelector('.manageproduct-body_detail_product')?.classList.remove('addwhiteground')
  }
chartprice()
  {
    this.price = this.productextra.map((data:any) => Number(data.price))
    this.name = this.productextra.map((data:any) => (data.name))
    document.querySelector('.blackground')?.classList.add('addblackground')
    document.querySelector('.chart-content_price')?.classList.add('addchart')
  }

  chartquantity()
  {
    this.quantity = this.productextra.map((data:any) => Number(data.quantity))
    this.name = this.productextra.map((data:any) => (data.name))
    document.querySelector('.blackground')?.classList.add('addblackground')
    document.querySelector('.chart-content_quantity')?.classList.add('addchart') 
  }

  chartsold()
  {
    this.sold = this.productextra.map((data:any) => Number(data.sold))
    this.name = this.productextra.map((data:any) => (data.name))
    document.querySelector('.blackground')?.classList.add('addblackground')
    document.querySelector('.chart-content_sold')?.classList.add('addchart')
    
  }
  change(value:any):void
  {
    this.searchproduct=[]
    this.products=this.productextra
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
    this.products=this.productextra
    for(let i=0;i<this.products.length;i++)
      {
        if (this.products[i].name.toUpperCase().search(value.search.toUpperCase())!=-1||this.products[i].price.toUpperCase().indexOf(value.search.toUpperCase())!=-1)
          {
            this.searchproduct.push(this.products[i])
          }
      }
    this.products=this.searchproduct
    console.log(this.productextra)
  }
  getproduct(id:any,img:any,names:any,des:any,prices:any,quantity:any,solds:any,review:any)
  {
    setTimeout(this.addproduct,100)
    document.querySelector('.blackground')?.classList.add('addblackground')
    this.id=id
    this.img=img
    this.names=names
    this.des=des
    this.prices=prices
    this.quantitys=quantity
    this.solds=solds
    this.review=review

  }
  addproduct()
  {
    document.querySelector('.manageproduct-body_detail_product')?.classList.add('addwhiteground')
  }
  ngOnInit() :void 
  {
    this.products=this.d.getproduct().subscribe
    (
      data=> this.products=data
    )
  this.productextra=this.d.getproduct().forEach
  (
    data=> this.productextra=data
  )
  }
}