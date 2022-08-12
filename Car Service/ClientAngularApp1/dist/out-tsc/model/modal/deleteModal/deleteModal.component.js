import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { deleteModel } from 'src/store/actions/model.actions';
import { selectCurrentModel } from 'src/store/selectors/model.selectors';
let DeleteModalComponent = class DeleteModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.model$ = this.store.pipe(select(selectCurrentModel));
    }
    ngOnInit() {
    }
    handleDelete(id) {
        this.activeModal.close('Close click');
        this.store.dispatch(deleteModel({ id }));
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