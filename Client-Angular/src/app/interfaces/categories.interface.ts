import { ProductCategory } from './products.interface';

/**
 * Interfaz que representa una categoría de producto y su resumen.
 *
 * Contiene la información estadística y descriptiva de una categoría,
 * incluyendo su identificador, nombre y la cantidad de productos asociados.
 *
 * @remarks
 * El campo `name` utiliza el tipo {@link ProductCategory} para mantener
 * una única fuente de verdad y facilitar el mapeo de badges visuales.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Lacteos',
 *   count: 3
 * };
 * ```
 *
 * @public
 */
export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre de la categoría de productos */
  name: ProductCategory;

  /** Cantidad total de productos pertenecientes a esta categoría */
  count: number;
}
