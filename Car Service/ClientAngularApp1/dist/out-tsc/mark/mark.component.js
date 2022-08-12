import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { resetMarkFilter, setCurrentMarkDTO } from 'src/store/actions/mark.actions';
import { ModifyModalComponent } from './modal/modifyModal/modifyModal.component';
let MarkComponent = class MarkComponent {
    constructor(modalService, store) {
        this.modalService = modalService;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(resetMarkFilter());
    }
    openCreteModal() {
        this.store.dispatch(setCurrentMarkDTO({ markDTO: null }));
        this.modalService.open(ModifyModalComponent);
    }
};
MarkComponent = __decorate([
    Component({
        selector: 'app-mark',
        templateUrl: './mark.component.html',
        styleUrls: ['./mark.component.css']
    })
], MarkComponent);
export { MarkComponent };
//# sourceMappingURL=mark.component.js.map