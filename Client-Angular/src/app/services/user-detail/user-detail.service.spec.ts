import { TestBed } from '@angular/core/testing';
import { UserDetailService } from './user-detail.service';
import { USER_DETAIL } from '../../data/user-detail.interface';

describe('UserDetailService', () => {
  let service: UserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailService);
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getUserDetail debería retornar el usuario solicitado', (done) => {
      service.getUserDetail(1).subscribe((user) => {
        expect(user).toEqual(USER_DETAIL);
        expect(user.id).toBe(1);
        done();
      });
    });
  });
});
