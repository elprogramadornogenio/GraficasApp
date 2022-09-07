import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  //Data de bar

  @Input() datasets: ChartDataset<'bar'>[] = []
  @Input() labels: string[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
    this.barChartData.datasets = this.datasets;
    this.barChartData.labels = this.labels;
  }

}
