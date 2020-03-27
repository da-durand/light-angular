import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCreateComponent } from './light-create.component';

describe('LightCreateComponent', () => {
  let component: LightCreateComponent;
  let fixture: ComponentFixture<LightCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
