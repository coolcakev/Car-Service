import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { DeleteModalComponent } from 'src/car/modal/delete-modal/delete-modal.component';
import { ModifyModalComponent } from 'src/car/modal/modify-modal/modify-modal.component';
import { setCurrentCarDTO } from 'src/store/actions/car.actions';
let CarItemComponent = class CarItemComponent {
    constructor(modalService, store) {
        this.modalService = modalService;
        this.store = store;
    }
    ngOnInit() {
    }
    editHandle(car) {
        this.modalService.open(ModifyModalComponent);
        this.store.dispatch(setCurrentCarDTO({ carDTO: car }));
    }
    deleteHandle(car) {
        this.modalService.open(DeleteModalComponent);
        this.store.dispatch(setCurrentCarDTO({ carDTO: car }));
    }
};
__decorate([
    Input()
], CarItemComponent.prototype, "car", void 0);
CarItemComponent = __decorate([
    Component({
        selector: 'app-car-item',
        templateUrl: './car-item.component.html',
        styleUrls: ['./car-item.component.css']
    })
], CarItemComponent);
export { CarItemComponent };
//# sourceMappingURL=car-item.component.js.map