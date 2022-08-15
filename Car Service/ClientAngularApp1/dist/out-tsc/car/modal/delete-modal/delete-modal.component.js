import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { deleteCar } from 'src/store/actions/car.actions';
import { selectCurrentCar } from 'src/store/selectors/car.selectors';
let DeleteModalComponent = class DeleteModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.car$ = this.store.pipe(select(selectCurrentCar));
    }
    ngOnInit() {
    }
    handleDelete(id) {
        this.activeModal.close('Close click');
        this.store.dispatch(deleteCar({ id }));
    }
};
DeleteModalComponent = __decorate([
    Component({
        selector: 'app-delete-modal',
        templateUrl: './delete-modal.component.html',
        styleUrls: ['./delete-modal.component.css']
    })
], DeleteModalComponent);
export { DeleteModalComponent };
//# sourceMappingURL=delete-modal.component.js.map