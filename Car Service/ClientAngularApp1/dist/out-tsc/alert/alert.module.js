import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
let AlertModule = class AlertModule {
};
AlertModule = __decorate([
    NgModule({
        declarations: [
            AlertComponent
        ],
        imports: [
            CommonModule,
            MatSnackBarModule
        ],
        exports: [
            AlertComponent
        ],
    })
], AlertModule);
export { AlertModule };
//# sourceMappingURL=alert.module.js.map