import { Component,ViewChild,OnInit,Input } from '@angular/core';
import { DuLieuService } from '../../du-lieu.service';
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
    series: any;
    chart: any;
    dataLabels: any;
    plotOptions: any;
    yaxis: any;
    xaxis: any;
    grid: any;
    colors: any;
    legend: any;
  };
@Component({
  selector: 'chartprice',
  templateUrl: './chartprice.component.html',
  styleUrls: ['./chartprice.component.css']
})
export class Chartprice 
{
  @Input() sanpham:any
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor( private h :DuLieuService) {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data:  this.sanpham
        }
      ],
      chart: {
        height: 350,
        type: "bar",
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    }

  }
}
ngOnInit():void{
 this.sanpham=this.h.getsanpham().subscribe(
    data=>this.sanpham=data
 )
 }
}

