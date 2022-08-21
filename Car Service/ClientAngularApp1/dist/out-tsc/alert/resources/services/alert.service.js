import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AlertComponent } from 'src/alert/alert.component';
let AlertService = class AlertService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    showAlert(message, buttonText, type) {
        this._snackBar.openFromComponent(AlertComponent, {
            data: {
                message: message,
                buttonText: buttonText,
                type: type
            },
            horizontalPosition: 'right',
            verticalPosition: "top",
        });
    }
};
AlertService = __decorate([
    Injectable({
        providedIn: "root"
    })
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map