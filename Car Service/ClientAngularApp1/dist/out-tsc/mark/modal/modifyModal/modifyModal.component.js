import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select } from '@ngrx/store';
import { tap } from 'rxjs';
import { createMark, updateMark } from 'src/store/actions/mark.actions';
import { selectCurrentMark } from 'src/store/selectors/mark.selectors';
let ModifyModalComponent = class ModifyModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.isSubmited = false;
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
        });
        this.mark$ = this.store.pipe(select(selectCurrentMark), tap(mark => {
            if (mark !== null) {
                this.name.setValue(mark.name);
            }
        }));
    }
    get name() {
        return this.form.controls.name;
    }
    ngOnInit() {
    }
    submit(operation) {
        if (this.form.status != "VALID") {
            this.isSubmited = true;
            console.log(this.form);
            return;
        }
        this.activeModal.close('Close click');
        this.isSubmited = false;
        operation.bind(this)();
    }
    createMark() {
        const mark = {
            name: this.name.value,
        };
        this.store.dispatch(createMark({ mark }));
    }
    updateMark() {
        const mark = {
            name: this.name.value,
            id: null
        };
        this.store.dispatch(updateMark({ mark }));
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