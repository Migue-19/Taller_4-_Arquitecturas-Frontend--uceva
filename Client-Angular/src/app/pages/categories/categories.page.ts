import { Component, inject, OnInit } from '@angular/core';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { Category } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories/categories.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de la vista de categorías.
 *
 * Se encarga de gestionar y mostrar el listado resumido de categorías
 * utilizando el componente {@link CategoriesTableComponent}.
 *
 * @remarks
 * Consume el servicio {@link CategoriesService} para obtener las categorías
 * derivadas de los productos y controlar los estados de carga y error.
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  imports: [CategoriesTableComponent, AlertComponent],
})
export class CategoriesPage implements OnInit {
  /**
   * Listado de categorías obtenidas desde el servicio.
   * @type {Category[]}
   */
  categories: Category[] = [];

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener categorías.
   */
  private categoriesService = inject(CategoriesService);

  /**
   * Inicializa el componente y carga las categorías.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
