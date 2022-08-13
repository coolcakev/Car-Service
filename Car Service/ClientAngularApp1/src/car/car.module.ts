import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';
import { ViewCarComponent } from './view-car/view-car.component';
import { FilterComponent } from './filter/filter.component';
import { TreeModule } from 'src/tree/tree.module';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    TreeModule
  ],
  declarations: [
    CarComponent,
    ViewCarComponent,
    FilterComponent,
  ]
})
export class CarModule { }
