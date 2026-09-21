import { Component, inject, OnInit } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { AboutInfo } from '../../interfaces/about.interface';
import { AboutService } from '../../services/about/about.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor para la vista de información y estadísticas del proyecto.
 *
 * Administra el ciclo de vida y la obtención de las estadísticas calculadas
 * en cliente mediante {@link AboutCardComponent}.
 *
 * @remarks
 * Consume el servicio {@link AboutService} y demuestra el patrón asíncrono
 * con estados 'init', 'loading', 'success' y 'error'.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  imports: [AboutCardComponent, AlertComponent],
})
export class AboutPage implements OnInit {
  /**
   * Información del proyecto y contadores estadísticos.
   * @type {AboutInfo | null}
   */
  aboutInfo: AboutInfo | null = null;

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio inyectado de información de proyecto.
   */
  private aboutService = inject(AboutService);

  /**
   * Inicializa el componente y solicita la información del proyecto.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.aboutService.getAboutInfo().subscribe({
      next: (info) => {
        this.aboutInfo = info;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
