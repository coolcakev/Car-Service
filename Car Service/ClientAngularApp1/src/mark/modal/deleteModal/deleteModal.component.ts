import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteMark } from 'src/store/actions/mark.actions';
import { selectCurrentMark } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';
import { MarkDTO } from 'src/types/DTOs/markDTOs/markDTO';

@Component({
  selector: 'app-deleteModal',
  templateUrl: './deleteModal.component.html',
  styleUrls: ['./deleteModal.component.css']
})
export class DeleteModalComponent implements OnInit {

  mark$: Observable<MarkDTO>

  constructor(public activeModal: NgbActiveModal,
    private store: Store<AppState>) {
    this.mark$ = this.store.pipe(
      select(selectCurrentMark)      
    )
  }
  ngOnInit() {
  }

  handleDelete(id: number){
    this.activeModal.close('Close click')
    this.store.dispatch(deleteMark({id}));
  }

}
