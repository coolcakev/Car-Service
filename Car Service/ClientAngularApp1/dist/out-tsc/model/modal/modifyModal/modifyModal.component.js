import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select } from '@ngrx/store';
import { tap } from 'rxjs';
import { createModel, updateModel } from 'src/store/actions/model.actions';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
import { selectCurrentModel } from 'src/store/selectors/model.selectors';
let ModifyModalComponent = class ModifyModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.isSubmited = false;
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            markId: new FormControl(0, [Validators.min(1)]),
        });
        this.model$ = this.store.pipe(select(selectCurrentModel), tap(model => {
            if (model !== null) {
                this.name.setValue(model.name);
                this.markId.setValue(model.markId);
            }
        }));
        this.marksForSelect$ = this.store.pipe(select(selectMarksForSelect));
    }
    get name() {
        return this.form.controls.name;
    }
    get markId() {
        return this.form.controls.markId;
    }
    ngOnInit() {
    }
    handleMarkIdChange(markId) {
        this.markId.setValue(Number(markId));
    }
    submit(operation) {
        if (this.form.status != "VALID") {
            this.isSubmited = true;
            return;
        }
        this.activeModal.close('Close click');
        this.isSubmited = false;
        operation.bind(this)();
    }
    createModel() {
        const model = {
            name: this.name.value,
            markId: this.markId.value
        };
        this.store.dispatch(createModel({ model }));
    }
    updateModel() {
        const model = {
            name: this.name.value,
            id: null,
            markId: this.markId.value
        };
        this.store.dispatch(updateModel({ model }));
    }
};
ModifyModalComponent = __decorate([
    Component({
        selector: 'app-modifyModal',
        templateUrl: './modifyModal.component.html',
        styleUrls: ['./modifyModal.component.css']
    })
], ModifyModalComponent);
export { ModifyModalComponent };
//# sourceMappingURL=modifyModal.component.js.map