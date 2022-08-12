import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { setModelFilteringModel } from 'src/store/actions/model.actions';
import { selectModelPage, selectModelPageSize, selectModelTotal } from 'src/store/selectors/model.selectors';
let PaginationComponent = class PaginationComponent {
    constructor(store) {
        this.store = store;
        this.page$ = this.store.pipe(select(selectModelPage));
        this.pageSize$ = this.store.pipe(select(selectModelPageSize));
        this.modelsCount$ = this.store.pipe(select(selectModelTotal));
    }
    ngOnInit() {
    }
    handleChangePage(page) {
        this.store.dispatch(setModelFilteringModel({ modelFiltering: { page } }));
    }
    handlePageSizeChnge(event) {
        var htmlelement = event.target;
        this.store.dispatch(setModelFilteringModel({ modelFiltering: { count: Number(htmlelement.value) } }));
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