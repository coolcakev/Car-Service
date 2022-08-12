import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { getMarks, setCurrentMarkDTO, setMarkFilteringModel } from 'src/store/actions/mark.actions';
import { selectMarks } from 'src/store/selectors/mark.selectors';
import { DeleteModalComponent } from '../modal/deleteModal/deleteModal.component';
import { ModifyModalComponent } from '../modal/modifyModal/modifyModal.component';
let TableComponent = class TableComponent {
    constructor(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.marks$ = this.store.pipe(select(selectMarks));
    }
    ngOnInit() {
        this.store.dispatch(getMarks());
    }
    editHandle(mark) {
        this.modalService.open(ModifyModalComponent);
        this.store.dispatch(setCurrentMarkDTO({ markDTO: mark }));
    }
    deleteHandle(mark) {
        this.modalService.open(DeleteModalComponent);
        this.store.dispatch(setCurrentMarkDTO({ markDTO: mark }));
    }
    onSort({ column, direction }) {
        this.store.dispatch(setMarkFilteringModel({ markFiltering: { name: column, sortOrder: direction } }));
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