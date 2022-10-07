import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitaComponent } from './abilita.component';

describe('AbilitaComponent', () => {
  let component: AbilitaComponent;
  let fixture: ComponentFixture<AbilitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
