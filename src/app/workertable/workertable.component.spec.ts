import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkertableComponent } from './workertable.component';

describe('WorkertableComponent', () => {
  let component: WorkertableComponent;
  let fixture: ComponentFixture<WorkertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
