import { User, UserEngineering } from './users.interface';

/**
 * Interfaz que representa el detalle o perfil completo de un usuario.
 *
 * Extiende de {@link User} para mantener coherencia en el modelo de dominio
 * y reutilizar las definiciones de campos y tipos del sistema.
 *
 * @remarks
 * Reutiliza {@link UserEngineering} como única fuente de verdad para la carrera
 * o ingeniería asignada al usuario.
 *
 * @example
 * ```ts
 * const detalle: UserDetail = {
 *   id: 1,
 *   name: 'Carlos',
 *   lastName: 'Ramírez',
 *   age: 22,
 *   email: 'carlos.ramirez@example.com',
 *   engineering: 'Sistemas'
 * };
 * ```
 *
 * @public
 */
export interface UserDetail extends User {
  /**
   * Nota o estado complementario opcional del perfil.
   */
  bio?: string;
}
