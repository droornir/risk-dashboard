import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { WebRiskSeverity } from 'src/app/models/web-risk-severity.model';

@Component({
  selector: 'app-severities',
  templateUrl: './severities.component.html',
  styleUrls: ['./severities.component.scss']
})
export class SeveritiesComponent implements OnInit {
  @Input() title: string;
  @Input() webSeverities: WebRiskSeverity[];
  public chartOptions: object = {
    responsive: false,
    borderWidth: 0,
    cutoutPercentage: 87,
    tooltips: {
      enabled: false
    },
    elements: {
      arc: {
        borderWidth: 0
      },
    }
  };
  public chartData: MultiDataSet;
  public chartLabels: Label[] = ['HIGH', 'MEDIUM', 'LOW'];
  public chartColors: object = [{ backgroundColor: ['#d24346', '#f0ac38', '#4BAFD2'] }];

  ngOnInit() {
    this.title += ' SEVERITIES';
    this.sortSeverities(this.webSeverities);
    this.chartData = [this.getChartSum(this.webSeverities)];
  }

  sortSeverities = (severities) => {
    severities.sort((el1, el2) => {
      return - (el1.sum - el2.sum || el1._id.severity.localeCompare(el2._id.severity));
    });
  }
  getChartSum = (severities) => {
    return severities.map(severity => {
      return severity.sum;
    });
  }
}
