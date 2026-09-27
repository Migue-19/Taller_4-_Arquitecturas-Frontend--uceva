import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailPage } from './user-detail.page';
import { provideHttpClient } from '@angular/common/http';
import { UserDetailService } from '../../services/user-detail/user-detail.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { of, throwError } from 'rxjs';
import { USER_DETAIL_MOCK } from '../../mocks/user-detail.mocks';
import { By } from '@angular/platform-browser';

describe('UserDetailPage', () => {
  let component: UserDetailPage;
  let fixture: ComponentFixture<UserDetailPage>;
  let userDetailService: UserDetailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailPage, UserCardComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailPage);
    component = fixture.componentInstance;
    userDetailService = TestBed.inject(UserDetailService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getUserDetail al iniciar', () => {
    const spyGetUserDetail = jest
      .spyOn(userDetailService, 'getUserDetail')
      .mockReturnValue(of(USER_DETAIL_MOCK));
    fixture.detectChanges();
    expect(spyGetUserDetail).toHaveBeenCalledWith(1);
  });

  it('debería asignar el usuario recibido del servicio', () => {
    jest.spyOn(userDetailService, 'getUserDetail').mockReturnValue(of(USER_DETAIL_MOCK));
    fixture.detectChanges();
    expect(component.user).toEqual(USER_DETAIL_MOCK);
  });

  it('debería pasar el usuario al componente user-card', () => {
    jest.spyOn(userDetailService, 'getUserDetail').mockReturnValue(of(USER_DETAIL_MOCK));
    fixture.detectChanges();
    const cardComponent = fixture.debugElement
      .query(By.directive(UserCardComponent))
      .componentInstance;
    expect(cardComponent.user).toEqual(USER_DETAIL_MOCK);
  });

  it('debería manejar el error cuando falla getUserDetail', () => {
    component.user = null;
    const errorResponse = new Error('Error al cargar detalle');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest
      .spyOn(userDetailService, 'getUserDetail')
      .mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(userDetailService.getUserDetail).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.user).toBeNull();
  });
});
