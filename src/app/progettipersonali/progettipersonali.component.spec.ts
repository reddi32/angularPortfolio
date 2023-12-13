import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettipersonaliComponent } from './progettipersonali.component';

describe('ProgettipersonaliComponent', () => {
  let component: ProgettipersonaliComponent;
  let fixture: ComponentFixture<ProgettipersonaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgettipersonaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettipersonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
