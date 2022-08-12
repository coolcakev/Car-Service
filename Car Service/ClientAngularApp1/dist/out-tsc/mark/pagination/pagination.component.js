import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { setMarkFilteringModel } from 'src/store/actions/mark.actions';
import { selectMarkPage, selectMarkPageSize, selectMarkTotal } from 'src/store/selectors/mark.selectors';
let PaginationComponent = class PaginationComponent {
    constructor(store) {
        this.store = store;
        this.page$ = this.store.pipe(select(selectMarkPage));
        this.pageSize$ = this.store.pipe(select(selectMarkPageSize));
        this.marksCount$ = this.store.pipe(select(selectMarkTotal));
    }
    ngOnInit() {
    }
    handleChangePage(page) {
        this.store.dispatch(setMarkFilteringModel({ markFiltering: { page } }));
    }
    handlePageSizeChnge(event) {
        var htmlelement = event.target;
        this.store.dispatch(setMarkFilteringModel({ markFiltering: { count: Number(htmlelement.value) } }));
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