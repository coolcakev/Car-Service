import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';
import { ViewCarComponent } from './view-car/view-car.component';
import { FilterComponent } from './filter/filter.component';
import { TreeModule } from 'src/tree/tree.module';
let CarModule = class CarModule {
};
CarModule = __decorate([
    NgModule({
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
], CarModule);
export { CarModule };
//# sourceMappingURL=car.module.js.map