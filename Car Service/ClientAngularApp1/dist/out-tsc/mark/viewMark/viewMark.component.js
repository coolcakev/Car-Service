import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { getMark } from 'src/store/actions/mark.actions';
import { selectCurrentViewMark } from 'src/store/selectors/mark.selectors';
let ViewMarkComponent = class ViewMarkComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.mark$ = this.store.pipe(select(selectCurrentViewMark));
    }
    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.store.dispatch(getMark({ id }));
    }
};
ViewMarkComponent = __decorate([
    Component({
        selector: 'app-viewMark',
        templateUrl: './viewMark.component.html',
        styleUrls: ['./viewMark.component.css']
    })
], ViewMarkComponent);
export { ViewMarkComponent };
//# sourceMappingURL=viewMark.component.js.map