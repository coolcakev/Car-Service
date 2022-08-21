import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
let AlertComponent = class AlertComponent {
    constructor(data, snackBarRef) {
        this.data = data;
        this.snackBarRef = snackBarRef;
    }
};
AlertComponent = __decorate([
    Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.css']
    }),
    __param(0, Inject(MAT_SNACK_BAR_DATA))
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map