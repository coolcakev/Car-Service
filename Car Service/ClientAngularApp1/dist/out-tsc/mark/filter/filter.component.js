import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { map } from 'rxjs';
import { setMarkFilteringModel } from 'src/store/actions/mark.actions';
import { selectMarkFiltering } from 'src/store/selectors/mark.selectors';
import { delay } from 'src/utility/delay';
let FilterComponent = class FilterComponent {
    constructor(store) {
        this.store = store;
        this.searchTerm$ = this.store.pipe(select(selectMarkFiltering), map(x => x.searchTerm));
    }
    ngOnInit() {
    }
    hendleSearchTermChange(event) {
        var target = event.target;
        if (target == null) {
            return;
        }
        clearTimeout(this.delayId);
        delay(500, "delayId", this).then(() => this.store.dispatch(setMarkFilteringModel({ markFiltering: { searchTerm: target.value } })));
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