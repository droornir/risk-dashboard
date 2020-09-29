import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { MaterialModule } from '../../material.module';

import { DashboardComponent } from './dashboard.component';
import { WebRiskService } from 'src/app/services/web-risk.service';
import { WebRiskMockService } from 'src/app/shared/mocks/web-risk-mock.service';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { SeveritiesComponent } from 'src/app/components/severities/severities.component';
import { TypesComponent } from 'src/app/components/types/types.component';
import { SourcesComponent } from 'src/app/components/sources/sources.component';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { ParseAndCapitalize } from 'src/app/pipes/parse-and-capitalize.pipe';
import { getMockRiskData, mockWebRiskJSON, getMockRiskProgress } from '../../shared/mocks/mock_helper';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent,
        ProgressBarComponent,
        SeveritiesComponent,
        TypesComponent,
        SourcesComponent,
        LoadingSpinnerComponent,
        OrderByPipe,
        ParseAndCapitalize],
      providers: [{ provide: WebRiskService, useClass: WebRiskMockService }, ThemeService],
      imports: [ChartsModule, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    component.progressData = getMockRiskProgress();
    component.riskData = getMockRiskData(mockWebRiskJSON);

    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});


