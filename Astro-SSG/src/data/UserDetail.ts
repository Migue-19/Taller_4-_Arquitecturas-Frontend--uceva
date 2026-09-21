import type { UserDetail } from "@interfaces/UserDetail";
import { USERS } from "@data/Users";

/**
 * Detalle del usuario seleccionado en Astro extraído desde el listado centralizado.
 */
export const USER_DETAIL: UserDetail = USERS.find((u) => u.id === 1) || {
  ...USERS[0],
};
