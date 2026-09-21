import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { USERS } from '../../data/users.interface';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllUsers debería retornar un observable con los usuarios', (done) => {
      service.getAllUsers().subscribe(users => {
        expect(users).toEqual(USERS);
        expect(users.length).toBe(USERS.length);
        done();
      });
    });

  });
  
});
