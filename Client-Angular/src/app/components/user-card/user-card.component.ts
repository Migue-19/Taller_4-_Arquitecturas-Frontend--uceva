import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { UserEngineering } from '../../interfaces/users.interface';
import { UserDetail } from '../../interfaces/user-detail.interface';

/**
 * Componente de tarjeta o ficha de usuario.
 *
 * Presenta de manera visual y estructurada la información de perfil
 * de un usuario específico, resaltando su ingeniería mediante un badge del design system.
 *
 * @remarks
 * Recibe los datos del usuario mediante el Input `user` y utiliza `engineeringMap`
 * basado en {@link UserEngineering} para colorear el distintivo de su carrera.
 *
 * @example
 * ```html
 * <app-user-card [user]="selectedUser"></app-user-card>
 * ```
 */
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class UserCardComponent {
  /**
   * Datos del usuario a mostrar en la ficha.
   * @type {UserDetail | null}
   */
  @Input() user: UserDetail | null = null;

  /**
   * Mapeo de carreras de ingeniería a tipos de Badge del design system.
   * @type {Record<UserEngineering, BadgeType>}
   * @remarks
   * - 'Sistemas' → 'success' (verde)
   * - 'Electronica' → 'primary' (azul)
   * - 'Biomedica' → 'warning' (amarillo)
   * - 'Industrial' → 'danger' (rojo)
   * - 'Ambiental' → 'secondary' (gris)
   */
  engineeringMap: Record<UserEngineering, BadgeType> = {
    Sistemas: 'success',
    Electronica: 'primary',
    Biomedica: 'warning',
    Industrial: 'danger',
    Ambiental: 'secondary',
  };
}
