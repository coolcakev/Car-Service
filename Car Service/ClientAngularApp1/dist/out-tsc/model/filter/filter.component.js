import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { map } from 'rxjs';
import { getMarksForSelect } from 'src/store/actions/mark.actions';
import { setModelFilteringModel } from 'src/store/actions/model.actions';
import { selectModelFiltering } from 'src/store/selectors/model.selectors';
import { delay } from 'src/utility/delay';
let FilterComponent = class FilterComponent {
    constructor(store) {
        this.store = store;
        this.searchTerm$ = this.store.pipe(select(selectModelFiltering), map(x => x.searchTerm));
        this.markId$ = this.store.pipe(select(selectModelFiltering), map(x => x.markId));
    }
    ngOnInit() {
        this.store.dispatch(getMarksForSelect());
    }
    hendleSearchTermChange(event) {
        var target = event.target;
        if (target == null) {
            return;
        }
        clearTimeout(this.delayId);
        delay(500, this).then(() => this.store.dispatch(setModelFilteringModel({ modelFiltering: { searchTerm: target.value } })));
    }
    handleMarkIdChange(markId) {
        this.store.dispatch(setModelFilteringModel({ modelFiltering: { markId } }));
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