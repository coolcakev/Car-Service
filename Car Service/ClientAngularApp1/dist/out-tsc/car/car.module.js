import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CarComponent } from './car.component';
import { CarRoutingModule } from './car-routing.module';
import { ViewCarComponent } from './view-car/view-car.component';
import { FilterComponent } from './filter/filter.component';
import { TreeModule } from 'src/tree/tree.module';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from 'src/store/effects/car.effects';
import { ModelModule } from 'src/model/model.module';
import { MaterialModule } from 'src/material.module';
import { CarGridComponent } from './car-grid/car-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyModalComponent } from './modal/modify-modal/modify-modal.component';
import { LetModule } from '@ngrx/component';
import { CarItemComponent } from './car-grid/car-item/car-item.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
let CarModule = class CarModule {
};
CarModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            CarRoutingModule,
            TreeModule,
            EffectsModule.forFeature([CarEffects]),
            ModelModule,
            NgxSliderModule,
            MaterialModule,
            ReactiveFormsModule,
            LetModule
        ],
        declarations: [
            CarComponent,
            ViewCarComponent,
            FilterComponent,
            CarGridComponent,
            ModifyModalComponent,
            CarItemComponent,
            DeleteModalComponent
        ]
    })
], CarModule);
export { CarModule };
//# sourceMappingURL=car.module.js.map