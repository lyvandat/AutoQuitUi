import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessScanComponent } from './process-scan.component';

describe('ProcessScanComponent', () => {
  let component: ProcessScanComponent;
  let fixture: ComponentFixture<ProcessScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
