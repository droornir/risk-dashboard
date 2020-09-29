import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
const MOCK_PROGRESS = 77;

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component.title).toBe('SYSTEM RISK METER');
  });

  it('should render component with title and progress', () => {
    component.progress = MOCK_PROGRESS;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const containerDiv = compiled.querySelector('div');
    expect(containerDiv.children[0].innerText).toBe('SYSTEM RISK METER');
    expect(containerDiv.children[1].innerText).toBe(MOCK_PROGRESS + '%');
  });
});
