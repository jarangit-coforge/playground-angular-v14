import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBadgeComponent } from './package-badge.component';

describe('PackageBadgeComponent', () => {
  let component: PackageBadgeComponent;
  let fixture: ComponentFixture<PackageBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PackageBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
