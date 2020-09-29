import { Component, OnInit, Input } from '@angular/core';
import { WebRiskType } from 'src/app/models/web-risk-type.model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  @Input() webTypes: WebRiskType[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    for (const webType of this.webTypes) {
      webType.type = webType._id.type;
    }
  }
}
