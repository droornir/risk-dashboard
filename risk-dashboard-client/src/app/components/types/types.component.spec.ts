import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesComponent } from './types.component';
import { ParseAndCapitalize } from 'src/app/pipes/parse-and-capitalize.pipe';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { getWebRisksTypesDataForTesting } from 'src/app/shared/test_helper';

describe('TypesComponent', () => {
  let component: TypesComponent;
  let fixture: ComponentFixture<TypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesComponent, ParseAndCapitalize, OrderByPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesComponent);
    component = fixture.componentInstance;
    component.webTypes = getWebRisksTypesDataForTesting();
    component.title = 'DARK WEB TYPES'; // could also be CLEAR WEB
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
