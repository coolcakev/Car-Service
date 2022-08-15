import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { createModel, updateModel } from 'src/store/actions/model.actions';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
import { selectCurrentModel } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';
import { SelectDTO } from 'src/types/DTOs';
import { CreateModelDTO } from 'src/types/DTOs/modelDTOs/createModelDTO';
import { ModelDTO } from 'src/types/DTOs/modelDTOs/modelDTO';
import { UpdateModelDTO } from 'src/types/DTOs/modelDTOs/updateModelDTO';

@Component({
  selector: 'app-modifyModal',
  templateUrl: './modifyModal.component.html',
  styleUrls: ['./modifyModal.component.css']
})
export class ModifyModalComponent implements OnInit {

  model$: Observable<ModelDTO>
  isSubmited = false
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    markId: new FormControl<number>(0, [Validators.min(1)]),
  });
  marksForSelect$: Observable<SelectDTO[]>

  constructor(public activeModal: NgbActiveModal,
    private store: Store<AppState>) {
    this.model$ = this.store.pipe(
      select(selectCurrentModel),
      tap(model => {
        if (model !== null) {
          this.name.setValue(model.name)
          this.markId.setValue(model.markId)
        }
      })
    )
    this.marksForSelect$ = this.store.pipe(
      select(selectMarksForSelect),     
    )
  }

  get name() {
    return this.form.controls.name as FormControl;
  }
  get markId() {   
    return this.form.controls.markId as FormControl;
  }

  ngOnInit() {

  }
  handleMarkIdChange(markId: string) {
    this.markId.setValue(Number(markId))
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
  createModel() {
    const model: CreateModelDTO = {
      name: this.name.value,
      markId:this.markId.value
    }

    this.store.dispatch(createModel({ model }))
  }

  updateModel() {
    const model: UpdateModelDTO = {
      name: this.name.value,
      id:null,
      markId:this.markId.value
    }

    this.store.dispatch(updateModel({model}))
  }

}
