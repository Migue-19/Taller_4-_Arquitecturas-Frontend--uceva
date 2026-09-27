import { Component, inject, OnInit } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UserDetail } from '../../interfaces/user-detail.interface';
import { UserDetailService } from '../../services/user-detail/user-detail.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor para la vista de detalle de usuario.
 *
 * Se encarga de gestionar y presentar la información individual
 * de un usuario del sistema mediante {@link UserCardComponent}.
 *
 * @remarks
 * Consume el servicio {@link UserDetailService} para obtener la entidad
 * y gestionar los estados del flujo asíncrono de la aplicación.
 */
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  imports: [UserCardComponent, AlertComponent],
})
export class UserDetailPage implements OnInit {
  /**
   * Datos del usuario obtenidos desde el servicio.
   * @type {UserDetail | null}
   */
  user: UserDetail | null = null;

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio inyectado para consulta de usuario.
   */
  private userDetailService = inject(UserDetailService);

  /**
   * Inicializa el componente y solicita los datos del usuario.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.userDetailService.getUserDetail(1).subscribe({
      next: (user) => {
        this.user = user;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
