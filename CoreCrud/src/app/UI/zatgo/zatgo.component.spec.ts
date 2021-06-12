import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZatgoComponent } from './zatgo.component';

describe('ZatgoComponent', () => {
  let component: ZatgoComponent;
  let fixture: ComponentFixture<ZatgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZatgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZatgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
