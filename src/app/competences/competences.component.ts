import { Component, OnInit } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['HTML/CSS', 'Angular 9', '.NET', 'SQLServer/MySql'];

  public radarChartData: ChartDataSets[] = [
    { data: [90, 60, 60, 80, 0], label: '' },
  ];
  public radarChartType: ChartType = 'radar';

  public radarChartOptions2: RadialChartOptions = {
    responsive: true,
  };
  // tslint:disable-next-line: max-line-length
  public radarChartLabels2: Label[] = ['Windows/Linux', 'Serveur Apache', 'Adressage IP, Routage, DHCP, DNS', 'VMware (Virtualisation PC/ Serveur)'];

  public radarChartData2: ChartDataSets[] = [
    { data: [90, 65, 40, 70, 0 ], label: '' },
  ];
  public radarChartType2: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
