import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { resetModelFilter, setCurrentModelDTO } from 'src/store/actions/model.actions';
import { ModifyModalComponent } from './modal/modifyModal/modifyModal.component';
let ModelComponent = class ModelComponent {
    constructor(modalService, store) {
        this.modalService = modalService;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(resetModelFilter());
    }
    openCreteModal() {
        this.store.dispatch(setCurrentModelDTO({ modelDTO: null }));
        this.modalService.open(ModifyModalComponent);
    }
};
ModelComponent = __decorate([
    Component({
        selector: 'app-model',
        templateUrl: './model.component.html',
        styleUrls: ['./model.component.css']
    })
], ModelComponent);
export { ModelComponent };
//# sourceMappingURL=model.component.js.map