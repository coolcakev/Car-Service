import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { deleteMark } from 'src/store/actions/mark.actions';
import { selectCurrentMark } from 'src/store/selectors/mark.selectors';
let DeleteModalComponent = class DeleteModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.mark$ = this.store.pipe(select(selectCurrentMark));
    }
    ngOnInit() {
    }
    handleDelete(id) {
        this.activeModal.close('Close click');
        this.store.dispatch(deleteMark({ id }));
    }
};
DeleteModalComponent = __decorate([
    Component({
        selector: 'app-deleteModal',
        templateUrl: './deleteModal.component.html',
        styleUrls: ['./deleteModal.component.css']
    })
], DeleteModalComponent);
export { DeleteModalComponent };
//# sourceMappingURL=deleteModal.component.js.map