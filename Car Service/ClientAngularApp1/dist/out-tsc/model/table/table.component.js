import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { getModels, setCurrentModelDTO, setModelFilteringModel } from 'src/store/actions/model.actions';
import { selectModels } from 'src/store/selectors/model.selectors';
import { DeleteModalComponent } from '../modal/deleteModal/deleteModal.component';
import { ModifyModalComponent } from '../modal/modifyModal/modifyModal.component';
let TableComponent = class TableComponent {
    constructor(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.models$ = this.store.pipe(select(selectModels));
    }
    ngOnInit() {
        this.store.dispatch(getModels());
    }
    editHandle(model) {
        this.modalService.open(ModifyModalComponent);
        this.store.dispatch(setCurrentModelDTO({ modelDTO: model }));
    }
    deleteHandle(model) {
        this.modalService.open(DeleteModalComponent);
        this.store.dispatch(setCurrentModelDTO({ modelDTO: model }));
    }
    onSort({ column, direction }) {
        this.store.dispatch(setModelFilteringModel({ modelFiltering: { name: column, sortOrder: direction } }));
    }
};
TableComponent = __decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css']
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map