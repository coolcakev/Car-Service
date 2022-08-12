import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select } from '@ngrx/store';
import { getMarksForSelect } from 'src/store/actions/mark.actions';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
let MarkSelectorComponent = class MarkSelectorComponent {
    constructor(store) {
        this.store = store;
        this.hasError = false;
        this.myChange = new EventEmitter();
        this.marksForSelect$ = this.store.pipe(select(selectMarksForSelect));
    }
    ngOnInit() {
        this.store.dispatch(getMarksForSelect());
    }
    handleMarkIdChange(event) {
        var target = event.target;
        if (target == null) {
            return;
        }
        this.myChange.next(Number(target.value));
    }
};
__decorate([
    Input()
], MarkSelectorComponent.prototype, "hasError", void 0);
__decorate([
    Input()
], MarkSelectorComponent.prototype, "markId", void 0);
__decorate([
    Output()
], MarkSelectorComponent.prototype, "myChange", void 0);
MarkSelectorComponent = __decorate([
    Component({
        selector: 'app-markSelector',
        templateUrl: './markSelector.component.html',
        styleUrls: ['./markSelector.component.css']
    })
], MarkSelectorComponent);
export { MarkSelectorComponent };
//# sourceMappingURL=markSelector.component.js.map