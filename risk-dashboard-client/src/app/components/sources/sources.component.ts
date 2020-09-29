import { Component, OnInit, Input } from '@angular/core';
import { WebRiskSource } from 'src/app/models/web-risk-source.model';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  @Input() webSources: WebRiskSource[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
