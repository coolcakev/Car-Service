import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { createCar, updateCar } from 'src/store/actions/car.actions';
import { getMarksForSelect } from 'src/store/actions/mark.actions';
import { getModelsForSelect } from 'src/store/actions/model.actions';
import { selectCurrentCar } from 'src/store/selectors/car.selectors';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
import { selectModelsForSelect } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';
import { SelectDTO } from 'src/types/DTOs';
import { CarDTO } from 'src/types/DTOs/CarDTOs/CarDTO';
import { CreateCarDTO } from 'src/types/DTOs/CarDTOs/createCarDTO';
import { UpdateCarDTO } from 'src/types/DTOs/CarDTOs/updateCarDTO';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.css']
})
export class ModifyModalComponent implements OnInit {

  car$: Observable<CarDTO>
  isSubmited = false
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    markId: new FormControl<number>(0, [Validators.min(1)]),
    modelId: new FormControl<number>(0, [Validators.min(1)]),
    color: new FormControl<string>('', [Validators.required]),
    engine: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.min(1)]),
  });

  marksForSelect$: Observable<SelectDTO[]>
  modelsForSelect$: Observable<SelectDTO[]>

  constructor(public activeModal: NgbActiveModal,
    private store: Store<AppState>) {
    this.car$ = this.store.pipe(
      select(selectCurrentCar),
      tap(car => {
        if (car === null) {
          return
        }

        this.name.setValue(car.name)
        this.markId.setValue(car.mark.id)
        this.modelId.setValue(car.model.id)
        this.color.setValue(car.color)
        this.engine.setValue(car.engine)
        this.price.setValue(car.endPrice)
        this.store.dispatch(getModelsForSelect({ markId: car.mark.id }))

      })
    )
    this.marksForSelect$ = this.store.pipe(
      select(selectMarksForSelect),
    )

    this.modelsForSelect$ = this.store.pipe(
      select(selectModelsForSelect),
    )
  }

  get name() {
    return this.form.controls.name as FormControl;
  }
  get markId() {
    return this.form.controls.markId as FormControl;
  }
  get modelId() {
    return this.form.controls.modelId as FormControl;
  }
  get color() {
    return this.form.controls.color as FormControl;
  }
  get engine() {
    return this.form.controls.engine as FormControl;
  }
  get price() {
    return this.form.controls.price as FormControl;
  }

  ngOnInit() {
    this.store.dispatch(getMarksForSelect())
  }
  handleMarkIdChange(markId: string) {
    this.markId.setValue(Number(markId))
    this.store.dispatch(getModelsForSelect({ markId: Number(markId) }))
  }
  handleModelIdChange(modelId: string) {
    this.modelId.setValue(Number(modelId))
  }

  submit(operation: () => void) {
    if (this.form.status != "VALID") {
      this.isSubmited = true;
      return
    }
    this.activeModal.close('Close click')
    this.isSubmited = false;
    operation.bind(this)()

  }
  createCar() {
    const car: CreateCarDTO = {
      name: this.name.value,
      markId: this.markId.value,
      modelId: this.modelId.value,
      color: this.color.value,
      engine: this.engine.value,
      price: this.price.value

    }

    this.store.dispatch(createCar({ car }))
  }

  updateCar() {
    const car: UpdateCarDTO = {
      id: null,
      name: this.name.value,
      markId: this.markId.value,
      modelId: this.modelId.value,
      color: this.color.value,
      engine: this.engine.value,
      price:this.price.value
    }

    this.store.dispatch(updateCar({ car }))
  }

}
