import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusLoinComponent } from './plus-loin.component';

describe('PlusLoinComponent', () => {
  let component: PlusLoinComponent;
  let fixture: ComponentFixture<PlusLoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusLoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusLoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
