import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDetail } from '../../interfaces/user-detail.interface';
import { USER_DETAIL } from '../../data/user-detail.interface';
import { USERS } from '../../data/users.interface';

/**
 * Servicio encargado de la consulta de detalles de usuario.
 *
 * Proporciona métodos para consultar la información específica de un
 * usuario individual directamente desde el almacén de datos centralizado.
 *
 * @example
 * ```ts
 * constructor(private userDetailService: UserDetailService) {}
 *
 * this.userDetailService.getUserDetail(1).subscribe(user => {
 *   console.log(user);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  /**
   * Obtiene la ficha de detalle de un usuario por su identificador.
   *
   * @param id Identificador único del usuario a consultar (por defecto 1).
   * @returns Observable que emite los datos del usuario.
   *
   * @example
   * ```ts
   * this.userDetailService.getUserDetail(1).subscribe(user => {
   *   console.log(user);
   * });
   * ```
   */
  getUserDetail(id: number = 1): Observable<UserDetail> {
    const user = USERS.find((u) => u.id === id) || USER_DETAIL;
    return of(user);
  }
}
