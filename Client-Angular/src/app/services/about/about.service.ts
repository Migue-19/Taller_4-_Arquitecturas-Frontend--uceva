import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AboutInfo } from '../../interfaces/about.interface';
import { getAboutData } from '../../data/about.interface';

/**
 * Servicio encargado de proveer la información y estadísticas del proyecto.
 *
 * Calcula en tiempo de ejecución las métricas totales a partir de los almacenes
 * de datos sincronizados del cliente.
 *
 * @example
 * ```ts
 * constructor(private aboutService: AboutService) {}
 *
 * this.aboutService.getAboutInfo().subscribe(info => {
 *   console.log(info);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class AboutService {
  /**
   * Obtiene la información general y contadores calculados del proyecto.
   *
   * @returns Observable que emite la información resumida del sistema.
   *
   * @example
   * ```ts
   * this.aboutService.getAboutInfo().subscribe(info => {
   *   console.log(info.totalUsers);
   * });
   * ```
   */
  getAboutInfo(): Observable<AboutInfo> {
    return of(getAboutData());
  }
}
