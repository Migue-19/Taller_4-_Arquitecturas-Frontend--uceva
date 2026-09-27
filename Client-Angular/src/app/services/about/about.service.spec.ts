import { TestBed } from '@angular/core/testing';
import { AboutService } from './about.service';

describe('AboutService', () => {
  let service: AboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutService);
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAboutInfo debería retornar un observable con contadores calculados mayores a 0', (done) => {
      service.getAboutInfo().subscribe((info) => {
        expect(info).toBeTruthy();
        expect(info.totalUsers).toBeGreaterThan(0);
        expect(info.totalProducts).toBeGreaterThan(0);
        expect(info.totalCategories).toBeGreaterThan(0);
        done();
      });
    });
  });
});
