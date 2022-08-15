import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { setCurrentCarDTO } from 'src/store/actions/car.actions';
import { ModifyModalComponent } from './modal/modify-modal/modify-modal.component';
let CarComponent = class CarComponent {
    constructor(store, modalService) {
        this.store = store;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    openCreteModal() {
        this.store.dispatch(setCurrentCarDTO({ carDTO: null }));
        this.modalService.open(ModifyModalComponent);
    }
};
CarComponent = __decorate([
    Component({
        selector: 'app-car',
        templateUrl: './car.component.html',
        styleUrls: ['./car.component.css']
    })
], CarComponent);
export { CarComponent };
//# sourceMappingURL=car.component.js.map