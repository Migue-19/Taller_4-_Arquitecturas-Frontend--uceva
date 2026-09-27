import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';
import { CATEGORIES } from '../../data/categories.interface';

/**
 * Servicio encargado de la gestión de categorías de productos.
 *
 * Proporciona métodos para obtener el resumen estadístico de categorías
 * desde la data local sincronizada con los productos del sistema.
 *
 * @example
 * ```ts
 * constructor(private categoriesService: CategoriesService) {}
 *
 * this.categoriesService.getAllCategories().subscribe(categories => {
 *   console.log(categories);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  /**
   * Obtiene la lista de categorías con su correspondiente conteo de productos.
   *
   * @returns Observable que emite un array de categorías.
   *
   * @example
   * ```ts
   * this.categoriesService.getAllCategories().subscribe(categories => {
   *   console.log(categories);
   * });
   * ```
   */
  getAllCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
