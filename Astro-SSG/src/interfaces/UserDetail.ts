import type { User, UserEngineering } from "./Users";

/**
 * Interfaz que representa el detalle de usuario en Astro.
 *
 * Extiende de {@link User} y reutiliza {@link UserEngineering}
 * como única fuente de verdad tipada para carreras de ingeniería.
 */
export interface UserDetail extends User {
  bio?: string;
}
