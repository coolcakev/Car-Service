import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { getCar } from 'src/store/actions/car.actions';
import { selectCurrentViewCar } from 'src/store/selectors/car.selectors';
let ViewCarComponent = class ViewCarComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.car$ = this.store.pipe(select(selectCurrentViewCar));
    }
    ngOnDestroy() {
        // this.store.
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.store.dispatch(getCar({ id }));
    }
};
ViewCarComponent = __decorate([
    Component({
        selector: 'app-view-car',
        templateUrl: './view-car.component.html',
        styleUrls: ['./view-car.component.css']
    })
], ViewCarComponent);
export { ViewCarComponent };
//# sourceMappingURL=view-car.component.js.map