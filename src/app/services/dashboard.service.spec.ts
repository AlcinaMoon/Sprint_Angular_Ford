import { DashboardService } from './dashboard.service';
import { TestBed } from '@angular/core/testing';

describe('DashboardService', () => {

  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // configuração vazia, como no arquivo original
    });

    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    const instance = service;
    expect(instance).toBeTruthy();
  });

});