import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { createMark, updateMark } from 'src/store/actions/mark.actions';
import { selectCurrentMark } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';
import { CreateMarkDTO } from 'src/types/DTOs/markDTOs/createMarkDTO';
import { MarkDTO } from 'src/types/DTOs/markDTOs/markDTO';
import { UpdateMarkDTO } from 'src/types/DTOs/markDTOs/updateMarkDTO';

@Component({
  selector: 'app-modifyModal',
  templateUrl: './modifyModal.component.html',
  styleUrls: ['./modifyModal.component.css']
})
export class ModifyModalComponent implements OnInit {

  mark$: Observable<MarkDTO>
  isSubmited = false
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
  });

  constructor(public activeModal: NgbActiveModal,
    private store: Store<AppState>) {
    this.mark$ = this.store.pipe(
      select(selectCurrentMark),
      tap(mark => {
        if (mark !== null) {
          this.name.setValue(mark.name)
        }
      })
    )
  }

  get name() {
    return this.form.controls.name as FormControl;
  }

  ngOnInit() {

  }

  submit(operation: () => void) {
    if (this.form.status != "VALID") {
      this.isSubmited = true;
      console.log(this.form);
      return
    }
    this.activeModal.close('Close click')
    this.isSubmited = false;
    operation.bind(this)()

  }
  createMark() {
    const mark: CreateMarkDTO = {
      name: this.name.value,
    }

    this.store.dispatch(createMark({ mark }))
  }

  updateMark() {
    const mark: UpdateMarkDTO = {
      name: this.name.value,
      id:null
    }

    this.store.dispatch(updateMark({mark}))
  }

}
