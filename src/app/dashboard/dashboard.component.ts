import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Veiculo } from '../models/veiculo.model';
import { VehicleData } from '../models/vehicleData.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarroVin } from '../utils/carroVinInterface';
import { Subscription } from 'rxjs';
import { MenuComponent } from "../menu/menu.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MenuComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  vehicleData!: VehicleData;

  carVin!: CarroVin;
  reqVin!: Subscription;

  selectCarForm = new FormGroup({
    carId: new FormControl(''),
  });

  vinForm = new FormGroup({
    vin: new FormControl(''),
  });

  constructor(private dashboardservice: DashboardService) {}

  ngOnInit(): void {

    this.dashboardservice.getVehicles().subscribe((res) => {
      this.vehicles = res.vehicles;
    });

    this.selectCarForm.controls.carId.valueChanges.subscribe((id) => {
      this.selectedVehicle = this.vehicles.find(v => v.id == Number(id))!;
    });

    this.vinForm.controls.vin.valueChanges.subscribe((value) => {
      if (value) {
        this.reqVin = this.dashboardservice.buscarVin(value as string).subscribe((res) => {
          this.carVin = res;
        });
      }
    });
  }
}
