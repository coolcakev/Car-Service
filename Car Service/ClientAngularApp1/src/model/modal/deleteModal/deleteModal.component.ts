import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteModel } from 'src/store/actions/model.actions';
import { selectCurrentModel } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';
import { ModelDTO } from 'src/types/DTOs/modelDTOs/modelDTO';

@Component({
  selector: 'app-deleteModal',
  templateUrl: './deleteModal.component.html',
  styleUrls: ['./deleteModal.component.css']
})
export class DeleteModalComponent implements OnInit {

  model$: Observable<ModelDTO>

  constructor(public activeModal: NgbActiveModal,
    private store: Store<AppState>) {
    this.model$ = this.store.pipe(
      select(selectCurrentModel)      
    )
  }
  ngOnInit() {
  }

  handleDelete(id: number){
    this.activeModal.close('Close click')
    this.store.dispatch(deleteModel({id}));
  }

}
