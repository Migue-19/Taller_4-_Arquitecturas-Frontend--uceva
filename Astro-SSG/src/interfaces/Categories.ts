import type { ProductCategory } from "./Products";

/**
 * Interfaz que representa una categoría de producto en Astro.
 *
 * Reutiliza el tipo {@link ProductCategory} para evitar duplicidad
 * en la definición de las categorías del dominio.
 */
export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre de la categoría */
  name: ProductCategory;

  /** Cantidad de productos asociados */
  count: number;
}
