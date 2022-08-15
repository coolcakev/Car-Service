import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let MarkSelectorComponent = class MarkSelectorComponent {
    constructor() {
        this.hasError = false;
        this.myChange = new EventEmitter();
    }
    handleMarkIdChange(event) {
        var target = event.target;
        if (target == null) {
            return;
        }
        this.myChange.next(target.value);
    }
};
__decorate([
    Input()
], MarkSelectorComponent.prototype, "allValueName", void 0);
__decorate([
    Input()
], MarkSelectorComponent.prototype, "hasError", void 0);
__decorate([
    Input()
], MarkSelectorComponent.prototype, "markId", void 0);
__decorate([
    Input()
], MarkSelectorComponent.prototype, "elementsSelect$", void 0);
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