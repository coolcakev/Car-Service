import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select } from '@ngrx/store';
import { tap } from 'rxjs';
import { createCar, updateCar } from 'src/store/actions/car.actions';
import { getMarksForSelect } from 'src/store/actions/mark.actions';
import { getModelsForSelect } from 'src/store/actions/model.actions';
import { selectCurrentCar } from 'src/store/selectors/car.selectors';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
import { selectModelsForSelect } from 'src/store/selectors/model.selectors';
let ModifyModalComponent = class ModifyModalComponent {
    constructor(activeModal, store) {
        this.activeModal = activeModal;
        this.store = store;
        this.isSubmited = false;
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            markId: new FormControl(0, [Validators.min(1)]),
            modelId: new FormControl(0, [Validators.min(1)]),
            color: new FormControl('', [Validators.required]),
            engine: new FormControl('', [Validators.required]),
            price: new FormControl(0, [Validators.min(1)]),
        });
        this.car$ = this.store.pipe(select(selectCurrentCar), tap(car => {
            if (car === null) {
                return;
            }
            this.name.setValue(car.name);
            this.markId.setValue(car.mark.id);
            this.modelId.setValue(car.model.id);
            this.color.setValue(car.color);
            this.engine.setValue(car.engine);
            this.price.setValue(car.endPrice);
            this.store.dispatch(getModelsForSelect({ markId: car.mark.id }));
        }));
        this.marksForSelect$ = this.store.pipe(select(selectMarksForSelect));
        this.modelsForSelect$ = this.store.pipe(select(selectModelsForSelect));
    }
    get name() {
        return this.form.controls.name;
    }
    get markId() {
        return this.form.controls.markId;
    }
    get modelId() {
        return this.form.controls.modelId;
    }
    get color() {
        return this.form.controls.color;
    }
    get engine() {
        return this.form.controls.engine;
    }
    get price() {
        return this.form.controls.price;
    }
    ngOnInit() {
        this.store.dispatch(getMarksForSelect());
    }
    handleMarkIdChange(markId) {
        this.markId.setValue(Number(markId));
        this.store.dispatch(getModelsForSelect({ markId: Number(markId) }));
    }
    handleModelIdChange(modelId) {
        this.modelId.setValue(Number(modelId));
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
    createCar() {
        const car = {
            name: this.name.value,
            markId: this.markId.value,
            modelId: this.modelId.value,
            color: this.color.value,
            engine: this.engine.value,
            price: this.price.value
        };
        this.store.dispatch(createCar({ car }));
    }
    updateCar() {
        const car = {
            id: null,
            name: this.name.value,
            markId: this.markId.value,
            modelId: this.modelId.value,
            color: this.color.value,
            engine: this.engine.value,
            price: this.price.value
        };
        this.store.dispatch(updateCar({ car }));
    }
};
ModifyModalComponent = __decorate([
    Component({
        selector: 'app-modify-modal',
        templateUrl: './modify-modal.component.html',
        styleUrls: ['./modify-modal.component.css']
    })
], ModifyModalComponent);
export { ModifyModalComponent };
//# sourceMappingURL=modify-modal.component.js.map