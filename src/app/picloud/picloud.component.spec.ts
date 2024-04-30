import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicloudComponent } from './picloud.component';

describe('PicloudComponent', () => {
  let component: PicloudComponent;
  let fixture: ComponentFixture<PicloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
