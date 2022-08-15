import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { map } from 'rxjs';
import * as CarSelectors from '../../store/selectors/car.selectors';
import * as CarAction from '../../store/actions/car.actions';
import { delay } from 'src/utility/delay';
let FilterComponent = class FilterComponent {
    constructor(store) {
        this.store = store;
        this.searchTerm$ = this.store.pipe(select(CarSelectors.selectCarFiltering), map(x => x.searchTerm));
        this.dateTime$ = this.store.pipe(select(CarSelectors.selectCarFiltering), map(x => x.priceDate));
        this.colors$ = this.store.pipe(select(CarSelectors.selectColors));
        this.engine$ = this.store.pipe(select(CarSelectors.selectEngine));
        this.maxValue$ = this.store.pipe(select(CarSelectors.selectMaxPrice));
        this.options$ = this.store.pipe(select(CarSelectors.selectMaxPrice), map((maxValue) => ({
            floor: 0,
            ceil: maxValue,
        })));
    }
    ngOnInit() {
        this.store.dispatch(CarAction.getDataForAllFilters());
        this.store.dispatch(CarAction.getCars());
    }
    hendleSearchTermChange(event) {
        var target = event.target;
        if (target == null) {
            return;
        }
        clearTimeout(this.delayId);
        delay(500, "delayId", this).then(() => this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { searchTerm: target.value } })));
    }
    handleMarkIdChange(markId) {
        this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { markId: Number(markId) } }));
    }
    handleColorChange(color) {
        this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { color } }));
    }
    handleEngineChange(engine) {
        this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { engine } }));
    }
    handlePriceChange(changeContext) {
        clearTimeout(this.priceDelayId);
        delay(500, "priceDelayId", this).then(() => {
            this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { startPrice: changeContext.value, endPrice: changeContext.highValue } }));
        });
    }
    handleDateChange(event) {
        this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { priceDate: event.value } }));
    }
    hendleGetCarsAllMarks(event) {
        this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { markId: 0, modelId: 0 } }));
    }
};
FilterComponent = __decorate([
    Component({
        selector: 'app-filter',
        templateUrl: './filter.component.html',
        styleUrls: ['./filter.component.css']
    })
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=filter.component.js.map