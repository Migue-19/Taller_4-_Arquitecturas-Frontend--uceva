import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { CategoriesPage } from './pages/categories/categories.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link CategoriesPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de categorías.
   *
   * @remarks
   * Renderiza el componente `CategoriesPage`, encargado
   * de mostrar el resumen agrupado de categorías.
   */
  { path: 'categories', component: CategoriesPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];