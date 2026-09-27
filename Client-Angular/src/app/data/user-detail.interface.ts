import { UserDetail } from '../interfaces/user-detail.interface';
import { USERS } from './users.interface';

/**
 * Información detallada del usuario seleccionado en el sistema.
 *
 * Esta constante extrae el usuario directamente desde el listado global {@link USERS},
 * asegurando que no existan duplicidades de datos y garantizando una única fuente de verdad.
 *
 * @type {UserDetail}
 */
export const USER_DETAIL: UserDetail = USERS.find((u) => u.id === 1) || {
  ...USERS[0],
};
