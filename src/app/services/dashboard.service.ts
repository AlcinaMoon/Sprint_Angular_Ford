import { Injectable, model } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CarroVin } from '../utils/carroVinInterface';
import { VeiculosAPI } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  private baseUrl = 'http://localhost:3001';

  constructor(
    private http: HttpClient
  ) {}

  getVehicles(): Observable<VeiculosAPI> {
    const endpoint = `${this.baseUrl}/vehicles`;
    return this.http.get<VeiculosAPI>(endpoint);
  }


  buscarVin(codigoVin: string): Observable<CarroVin> {
    const endpoint = `${this.baseUrl}/vehicleData`;
    const payload = { vin: codigoVin };

    return this.http.post<CarroVin>(endpoint, payload);
  }
}