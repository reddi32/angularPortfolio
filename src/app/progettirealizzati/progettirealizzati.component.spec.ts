import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettirealizzatiComponent } from './progettirealizzati.component';

describe('ProgettirealizzatiComponent', () => {
  let component: ProgettirealizzatiComponent;
  let fixture: ComponentFixture<ProgettirealizzatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgettirealizzatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettirealizzatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
