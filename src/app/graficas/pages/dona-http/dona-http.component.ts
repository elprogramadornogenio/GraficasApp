import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public colors: Color[] = [
    '#3D749C',
    '#E6201E',
    '#72B7E8',
    '#E8E85A',
    '#9E9E3A'
  ];
  public doughnutChartLabels: string[] = [];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [], label: 'Series A', backgroundColor: this.colors },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    /* this.graficasService.getUsuariosRedesSociales()
      .subscribe(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartLabels = labels;
        this.doughnutChartDatasets[0].data = values;


      }); */

      this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartDatasets[0].data = values;
      });
  }

}
