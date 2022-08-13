import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarComponent } from "./car.component";
import { ViewCarComponent } from "./view-car/view-car.component";
const routes = [
    { path: 'car', component: CarComponent },
    { path: 'car/:id', component: ViewCarComponent },
];
let CarRoutingModule = class CarRoutingModule {
};
CarRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], CarRoutingModule);
export { CarRoutingModule };
//# sourceMappingURL=car-routing.module.js.map