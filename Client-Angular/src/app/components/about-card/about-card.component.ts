import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';
import { AboutInfo } from '../../interfaces/about.interface';

/**
 * Componente de presentación para la información del proyecto y estadísticas globales.
 *
 * Muestra una tarjeta principal con la descripción y alcance del proyecto,
 * complementada con tarjetas métricas que exhiben los contadores dinámicos calculados.
 *
 * @remarks
 * Recibe los datos estadísticos a través del Input `aboutInfo`.
 *
 * @example
 * ```html
 * <app-about-card [aboutInfo]="info"></app-about-card>
 * ```
 */
@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class AboutCardComponent {
  /**
   * Información general y estadísticas a mostrar.
   * @type {AboutInfo | null}
   */
  @Input() aboutInfo: AboutInfo | null = null;
}
