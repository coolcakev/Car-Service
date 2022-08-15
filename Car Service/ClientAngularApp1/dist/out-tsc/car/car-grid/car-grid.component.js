import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { selectCars, selectColomnCount } from 'src/store/selectors/car.selectors';
const countColomnToRowHeight = {};
let CarGridComponent = class CarGridComponent {
    constructor(store) {
        this.store = store;
        this.countColomnToRowHeight = {
            "2": "2:1",
            "3": "1.2:1",
            '4': "0.9:1"
        };
        this.cars$ = this.store.pipe(select(selectCars));
        this.colomnCount$ = this.store.pipe(select(selectColomnCount));
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