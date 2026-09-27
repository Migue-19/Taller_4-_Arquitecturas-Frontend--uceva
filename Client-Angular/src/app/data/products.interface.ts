import { Product } from "../interfaces/products.interface";

/**
 * Listado de productos disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de productos, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Product[]}
 */
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Leche entera',
    category: 'Lacteos',
    price: 4500
  },
  {
    id: 2,
    name: 'Queso campesino',
    category: 'Lacteos',
    price: 8200
  },
  {
    id: 3,
    name: 'Pechuga de pollo',
    category: 'Carnes',
    price: 14500
  },
  {
    id: 4,
    name: 'Carne molida de res',
    category: 'Carnes',
    price: 12800
  },
  {
    id: 5,
    name: 'Manzanas rojas',
    category: 'Frutas',
    price: 5200
  },
  {
    id: 6,
    name: 'Banano',
    category: 'Frutas',
    price: 2800
  },
  {
    id: 7,
    name: 'Tomate chonto',
    category: 'Verduras',
    price: 3500
  },
  {
    id: 8,
    name: 'Cebolla cabezona',
    category: 'Verduras',
    price: 3000
  },
  {
    id: 9,
    name: 'Yogurt natural',
    category: 'Lacteos',
    price: 2500
  },
  {
    id: 10,
    name: 'Pernil de cerdo',
    category: 'Carnes',
    price: 16000
  }
];