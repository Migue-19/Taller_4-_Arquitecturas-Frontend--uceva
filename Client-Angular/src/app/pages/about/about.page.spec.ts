import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPage } from './about.page';
import { provideHttpClient } from '@angular/common/http';
import { AboutService } from '../../services/about/about.service';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { of, throwError } from 'rxjs';
import { ABOUT_MOCK } from '../../mocks/about.mocks';
import { By } from '@angular/platform-browser';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;
  let aboutService: AboutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage, AboutCardComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    aboutService = TestBed.inject(AboutService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAboutInfo al iniciar', () => {
    const spyGetAboutInfo = jest
      .spyOn(aboutService, 'getAboutInfo')
      .mockReturnValue(of(ABOUT_MOCK));
    fixture.detectChanges();
    expect(spyGetAboutInfo).toHaveBeenCalled();
  });

  it('debería asignar la información recibida del servicio', () => {
    jest.spyOn(aboutService, 'getAboutInfo').mockReturnValue(of(ABOUT_MOCK));
    fixture.detectChanges();
    expect(component.aboutInfo).toEqual(ABOUT_MOCK);
  });

  it('debería pasar la información al componente about-card', () => {
    jest.spyOn(aboutService, 'getAboutInfo').mockReturnValue(of(ABOUT_MOCK));
    fixture.detectChanges();
    const cardComponent = fixture.debugElement
      .query(By.directive(AboutCardComponent))
      .componentInstance;
    expect(cardComponent.aboutInfo).toEqual(ABOUT_MOCK);
  });

  it('debería manejar el error cuando falla getAboutInfo', () => {
    component.aboutInfo = null;
    const errorResponse = new Error('Error al cargar acerca de');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest
      .spyOn(aboutService, 'getAboutInfo')
      .mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(aboutService.getAboutInfo).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.aboutInfo).toBeNull();
  });
});
