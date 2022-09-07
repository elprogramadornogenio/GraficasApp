import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  public colors: Color[] =[
    '#3D749C',
    '#E6201E',
    '#72B7E8',
    '#E8E85A',
    '#9E9E3A'
  ];
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A', backgroundColor: this.colors },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
