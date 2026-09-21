import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ProductCategory } from '../../interfaces/products.interface';
import { Category } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorías de productos.
 *
 * Muestra el listado de categorías junto con el número de productos
 * y un badge visual característico según la categoría.
 *
 * @remarks
 * Este componente recibe las categorías a través del Input `categories`
 * y asigna el color visual utilizando el mapeo `categoryMap` basado en {@link ProductCategory}.
 *
 * @example
 * ```html
 * <app-categories-table [categories]="categoriesList"></app-categories-table>
 * ```
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CategoriesTableComponent {
  /**
   * Listado de categorías a mostrar en la tabla.
   * @type {Category[]}
   */
  @Input() categories: Category[] = [];

  /**
   * Mapeo de categorías a tipos de Badge del design system.
   * @type {Record<ProductCategory, BadgeType>}
   * @remarks
   * - 'Carnes' → 'danger' (rojo)
   * - 'Frutas' → 'warning' (amarillo)
   * - 'Lacteos' → 'primary' (azul)
   * - 'Verduras' → 'success' (verde)
   */
  categoryMap: Record<ProductCategory, BadgeType> = {
    Carnes: 'danger',
    Frutas: 'warning',
    Lacteos: 'primary',
    Verduras: 'success',
  };
}
