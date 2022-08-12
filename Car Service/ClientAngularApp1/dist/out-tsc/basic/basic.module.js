import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { NgbdSortableHeader } from 'src/directives/sortable.directive';
let BasicModule = class BasicModule {
};
BasicModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            BasicComponent,
            NgbdSortableHeader
        ],
        exports: [
            NgbdSortableHeader
        ]
    })
], BasicModule);
export { BasicModule };
//# sourceMappingURL=basic.module.js.map