import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperariosBarredorasComponent } from './operarios-barredoras.component';

describe('OperariosBarredorasComponent', () => {
  let component: OperariosBarredorasComponent;
  let fixture: ComponentFixture<OperariosBarredorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperariosBarredorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperariosBarredorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
