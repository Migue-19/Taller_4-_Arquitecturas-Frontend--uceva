import { Component } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-date.page',
  imports: [BadgeAtom],
  templateUrl: './date.page.html',
})
export class DatePage {

  /**
   * Obtiene la fecha actual del sistema
   */
  currentDate = new Date();

}
