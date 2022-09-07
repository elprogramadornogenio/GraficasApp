import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#9A3EF0', hoverBackgroundColor: '#F5473D' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#DA5AFA', hoverBackgroundColor: '#F5473D' },
      { data: [ 30, 45, 67, 87, 56, 72, 12 ], label: 'Series C', backgroundColor: '#F74882', hoverBackgroundColor: '#F5473D' }
    ], 
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    this.barChartData.datasets[0].data = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100)
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100)
    ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100),
      Math.round(Math.random()*100)
    ];

      this.chart?.update();
  }

}
