import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { getModel } from 'src/store/actions/model.actions';
import { selectCurrentViewModel } from 'src/store/selectors/model.selectors';
let ViewModelComponent = class ViewModelComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.model$ = this.store.pipe(select(selectCurrentViewModel));
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.store.dispatch(getModel({ id }));
    }
};
ViewModelComponent = __decorate([
    Component({
        selector: 'app-viewModel',
        templateUrl: './viewModel.component.html',
        styleUrls: ['./viewModel.component.css']
    })
], ViewModelComponent);
export { ViewModelComponent };
//# sourceMappingURL=viewModel.component.js.map