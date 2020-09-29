import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesComponent } from './sources.component';
import { ParseAndCapitalize } from 'src/app/pipes/parse-and-capitalize.pipe';
import { getWebRisksSourcesDataForTesting } from 'src/app/shared/test_helper';

describe('SourcesComponent', () => {
  let component: SourcesComponent;
  let fixture: ComponentFixture<SourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourcesComponent, ParseAndCapitalize]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesComponent);
    component = fixture.componentInstance;
    component.webSources = getWebRisksSourcesDataForTesting();
    component.title = 'DARK WEB SOURCES'; // could also be CLEAR WEB
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title and risk-sources', () => {
    expect(component.title).toBe('DARK WEB SOURCES');
    for (const sourceKey of Object.keys(component.webSources)) {
      const riskSource = component.webSources[sourceKey];
      expect(riskSource.sum).toBeDefined();
      expect(riskSource._id).toBeDefined();
      expect(riskSource._id.sourceType).toBeDefined();
    }
  });
});
