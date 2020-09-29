import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WebRiskService } from '../../services/web-risk.service';
import { RiskData } from '../../models/risk-data.model';
import { DisplayErrorComponent } from 'src/app/shared/dialogs/error-display.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public riskData: RiskData;
  public progressData: number;
  public isDialogOpen = false;
  constructor(private dialog: MatDialog, private webRiskService: WebRiskService) { }

  ngOnInit() {
    this.getRisksData();
  }
  getRisksData() {
    this.webRiskService.getRisksProgress().subscribe(
      res => this.progressData = res,
      err => this.showError(err),
      () => { }
    );

    this.webRiskService.getRisksData().subscribe(
      res => this.riskData = res,
      err => this.showError(err),
      () => { }
    );
  }
  showError(err: any): void {
    if (!this.isDialogOpen) {
      this.dialog.open(DisplayErrorComponent);
      this.isDialogOpen = true;
    }
  }
}
