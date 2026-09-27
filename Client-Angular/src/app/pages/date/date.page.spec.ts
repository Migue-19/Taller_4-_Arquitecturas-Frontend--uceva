import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePage } from './date.page';

describe('DatePage', () => {
  let component: DatePage;
  let fixture: ComponentFixture<DatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
