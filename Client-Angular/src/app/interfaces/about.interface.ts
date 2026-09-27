/**
 * Interfaz que define la estructura informativa y métricas del proyecto.
 *
 * Provee un resumen descriptivo del alcance académico de la aplicación
 * junto con contadores estadísticos agregados del sistema.
 *
 * @remarks
 * Los contadores numéricos son calculados dinámicamente en tiempo de ejecución
 * en la SPA (Angular), a diferencia de la versión SSG (Astro) donde son
 * congelados en el HTML pre-renderizado en build-time.
 *
 * @example
 * ```ts
 * const info: AboutInfo = {
 *   title: 'Sistema de Gestión Académica UCEVA',
 *   description: 'Taller comparativo de arquitecturas web SPA vs SSG.',
 *   projectScope: 'Demostración de rendimiento y ciclo de vida.',
 *   totalUsers: 10,
 *   totalProducts: 10,
 *   totalCategories: 4
 * };
 * ```
 *
 * @public
 */
export interface AboutInfo {
  /** Título representativo del proyecto */
  title: string;

  /** Descripción general del proyecto */
  description: string;

  /** Alcance y enfoque técnico del aplicativo */
  projectScope: string;

  /** Conteo dinámico total de usuarios registrados */
  totalUsers: number;

  /** Conteo dinámico total de productos en catálogo */
  totalProducts: number;

  /** Conteo dinámico total de categorías disponibles */
  totalCategories: number;
}
