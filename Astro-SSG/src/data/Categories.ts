import type { Category } from "@interfaces/Categories";
import { PRODUCTS } from "@data/Products";

/**
 * Listado de categorías derivadas de los productos existentes en Astro.
 */
export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Lacteos',
    count: PRODUCTS.filter((p) => p.category === 'Lacteos').length,
  },
  {
    id: 2,
    name: 'Carnes',
    count: PRODUCTS.filter((p) => p.category === 'Carnes').length,
  },
  {
    id: 3,
    name: 'Frutas',
    count: PRODUCTS.filter((p) => p.category === 'Frutas').length,
  },
  {
    id: 4,
    name: 'Verduras',
    count: PRODUCTS.filter((p) => p.category === 'Verduras').length,
  },
];
