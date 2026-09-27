import { Category } from '../interfaces/categories.interface';
import { PRODUCTS } from './products.interface';

/**
 * Listado de categorías disponibles en el sistema con su conteo de productos.
 *
 * Esta constante representa la fuente de datos derivada (mock) calculada
 * a partir del listado de productos existente ({@link PRODUCTS}), garantizando
 * la sincronización y unicidad de la fuente de verdad.
 *
 * @type {Category[]}
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
