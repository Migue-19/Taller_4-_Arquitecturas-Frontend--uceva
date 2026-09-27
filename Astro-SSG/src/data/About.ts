import type { AboutInfo } from "@interfaces/About";
import { USERS } from "@data/Users";
import { PRODUCTS } from "@data/Products";
import { CATEGORIES } from "@data/Categories";

/**
 * Información general y métricas calculadas en tiempo de compilación (build-time) en Astro.
 */
export const ABOUT_INFO: AboutInfo = {
  title: 'Sistema de Gestión Académica UCEVA',
  description:
    'Aplicación demostrativa que contrasta los paradigmas de Single Page Application (SPA) y Static Site Generation (SSG).',
  projectScope:
    'Taller de arquitectura web con Angular y Astro, empleando componentes standalone y renderizado estático puro con datos desacoplados.',
  totalUsers: USERS.length,
  totalProducts: PRODUCTS.length,
  totalCategories: CATEGORIES.length,
};
