import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { setGridColomnCount } from 'src/store/actions/car.actions';
import { selectCarTotal, selectPageSize } from 'src/store/selectors/car.selectors';
let PaginationComponent = class PaginationComponent {
    constructor(store) {
        this.store = store;
        this.pageSizeOptions = [2, 3, 4];
        this.selectCarTotal$ = this.store.pipe(select(selectCarTotal));
        this.pageSize$ = this.store.pipe(select(selectPageSize));
    }
    ngOnInit() {
    }
    handlePageChnge(event) {
        this.store.dispatch(setGridColomnCount({ page: event.pageIndex + 1, colomnCount: event.pageSize }));
    }
};
PaginationComponent = __decorate([
    Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.css']
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map