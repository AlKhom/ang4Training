import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryInputComponent } from './try-input.component';

describe('TryInputComponent', () => {
  let component: TryInputComponent;
  let fixture: ComponentFixture<TryInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
