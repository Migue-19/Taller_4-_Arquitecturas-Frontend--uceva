import { AboutInfo } from '../interfaces/about.interface';
import { USERS } from './users.interface';
import { PRODUCTS } from './products.interface';
import { CATEGORIES } from './categories.interface';

/**
 * Función auxiliar para generar la información descriptiva y estadísticas calculadas del proyecto.
 *
 * @returns Instancia de {@link AboutInfo} con contadores calculados en tiempo real.
 */
export const getAboutData = (): AboutInfo => ({
  title: 'Sistema de Gestión Académica UCEVA',
  description:
    'Aplicación demostrativa que contrasta los paradigmas de Single Page Application (SPA) y Static Site Generation (SSG).',
  projectScope:
    'Taller de arquitectura web con Angular y Astro, empleando componentes standalone y renderizado estático puro con datos desacoplados.',
  totalUsers: USERS.length,
  totalProducts: PRODUCTS.length,
  totalCategories: CATEGORIES.length,
});

/**
 * Constante inicial con los datos calculados de Acerca de.
 */
export const ABOUT_INFO: AboutInfo = getAboutData();
