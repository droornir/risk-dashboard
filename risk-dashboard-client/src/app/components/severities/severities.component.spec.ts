import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { SeveritiesComponent } from './severities.component';
import { getWebRisksSeveritiesDataForTesting } from 'src/app/shared/test_helper';

describe('SeveritiesComponent', () => {
  let component: SeveritiesComponent;
  let fixture: ComponentFixture<SeveritiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeveritiesComponent], imports: [ChartsModule], providers: [ThemeService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveritiesComponent);
    component = fixture.componentInstance;
    component.webSeverities = getWebRisksSeveritiesDataForTesting();
    component.title = 'DARK WEB'; // could also be CLEAR WEB
    fixture.detectChanges();
  });

  it('should create component with severities', () => {
    expect(component.title).toBe('DARK WEB SEVERITIES');
    expect(component).toBeTruthy();
  });
});
