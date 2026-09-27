import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesPage } from './categories.page';
import { provideHttpClient } from '@angular/common/http';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { of, throwError } from 'rxjs';
import { CATEGORIES_MOCK } from '../../mocks/categories.mocks';
import { By } from '@angular/platform-browser';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPage, CategoriesTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
    categoriesService = TestBed.inject(CategoriesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCategories al iniciar', () => {
    const spyGetAllCategories = jest
      .spyOn(categoriesService, 'getAllCategories')
      .mockReturnValue(of(CATEGORIES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllCategories).toHaveBeenCalled();
  });

  it('debería asignar las categorías recibidas del servicio', () => {
    jest.spyOn(categoriesService, 'getAllCategories').mockReturnValue(of(CATEGORIES_MOCK));
    fixture.detectChanges();
    expect(component.categories).toEqual(CATEGORIES_MOCK);
  });

  it('debería pasar las categorías al componente categories-table', () => {
    jest.spyOn(categoriesService, 'getAllCategories').mockReturnValue(of(CATEGORIES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(CategoriesTableComponent))
      .componentInstance;
    expect(tableComponent.categories).toEqual(CATEGORIES_MOCK);
  });

  it('debería manejar el error cuando falla getAllCategories', () => {
    component.categories = [];
    const errorResponse = new Error('Error al cargar categorías');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest
      .spyOn(categoriesService, 'getAllCategories')
      .mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(categoriesService.getAllCategories).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.categories.length).toBe(0);
  });
});
