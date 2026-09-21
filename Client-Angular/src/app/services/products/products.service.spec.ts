import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { PRODUCTS } from '../../data/products.interface';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllProducts debería retornar un observable con los usuarios', (done) => {
      service.getAllProducts().subscribe(products => {
        expect(products).toEqual(PRODUCTS);
        expect(products.length).toBe(PRODUCTS.length);
        done();
      });
    });

  });

});
