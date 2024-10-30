import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRPackageComponent } from './irpackage.component';

describe('IRPackageComponent', () => {
  let component: IRPackageComponent;
  let fixture: ComponentFixture<IRPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IRPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IRPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
