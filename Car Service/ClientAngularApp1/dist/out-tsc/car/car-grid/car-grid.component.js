import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { selectCars } from 'src/store/selectors/car.selectors';
let CarGridComponent = class CarGridComponent {
    constructor(store) {
        this.store = store;
        this.cars$ = this.store.pipe(select(selectCars));
    }
    ngOnInit() {
    }
};
CarGridComponent = __decorate([
    Component({
        selector: 'app-car-grid',
        templateUrl: './car-grid.component.html',
        styleUrls: ['./car-grid.component.css']
    })
], CarGridComponent);
export { CarGridComponent };
//# sourceMappingURL=car-grid.component.js.map