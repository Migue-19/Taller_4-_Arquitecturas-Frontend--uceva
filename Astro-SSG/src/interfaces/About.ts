/**
 * Interfaz que define la información general y contadores estadísticos en Astro.
 */
export interface AboutInfo {
  /** Título representativo del proyecto */
  title: string;

  /** Descripción general del proyecto */
  description: string;

  /** Alcance y enfoque técnico del aplicativo */
  projectScope: string;

  /** Conteo total de usuarios (calculado en build-time en SSG) */
  totalUsers: number;

  /** Conteo total de productos (calculado en build-time en SSG) */
  totalProducts: number;

  /** Conteo total de categorías (calculado en build-time en SSG) */
  totalCategories: number;
}
