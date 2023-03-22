import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSelectComponent } from './process-select.component';

describe('ProcessSelectComponent', () => {
  let component: ProcessSelectComponent;
  let fixture: ComponentFixture<ProcessSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
