import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { USER_DETAIL_MOCK } from '../../mocks/user-detail.mocks';
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('no debería renderizar la tarjeta si user es null', () => {
    component.user = null;
    fixture.detectChanges();
    const card = fixture.debugElement.query(By.css('.card'));
    expect(card).toBeFalsy();
  });

  it('debería renderizar la tarjeta cuando user está definido', () => {
    component.user = USER_DETAIL_MOCK;
    fixture.detectChanges();

    const card = fixture.debugElement.query(By.css('.card'));
    expect(card).toBeTruthy();

    const title = fixture.debugElement.query(By.css('.card-title'));
    expect(title.nativeElement.textContent).toContain(
      `${USER_DETAIL_MOCK.name} ${USER_DETAIL_MOCK.lastName}`
    );
  });

  it('debería mapear cada ingeniería a su BadgeType correcto', () => {
    expect(component.engineeringMap['Sistemas']).toBe('success');
    expect(component.engineeringMap['Electronica']).toBe('primary');
    expect(component.engineeringMap['Biomedica']).toBe('warning');
    expect(component.engineeringMap['Industrial']).toBe('danger');
    expect(component.engineeringMap['Ambiental']).toBe('secondary');
  });
});
