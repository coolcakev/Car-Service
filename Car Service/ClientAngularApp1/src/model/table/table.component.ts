import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SortEvent } from 'src/directives/sortable.directive';
import { getModels, setCurrentModelDTO, setModelFilteringModel } from 'src/store/actions/model.actions';
import { selectModels } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';
import { ModelDTO } from 'src/types/DTOs/modelDTOs/modelDTO';
import { DeleteModalComponent } from '../modal/deleteModal/deleteModal.component';
import { ModifyModalComponent } from '../modal/modifyModal/modifyModal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  models$: Observable<ModelDTO[]>
  constructor(private store: Store<AppState>, private modalService: NgbModal) {
    this.models$ = this.store.pipe(select(selectModels))
  }


  ngOnInit() {
    this.store.dispatch(getModels());
  }

  editHandle(model: ModelDTO) {
    this.modalService.open(ModifyModalComponent);
    this.store.dispatch(setCurrentModelDTO({ modelDTO: model }));
  }
  deleteHandle(model: ModelDTO) {
    this.modalService.open(DeleteModalComponent);
    this.store.dispatch(setCurrentModelDTO({ modelDTO: model }));
  }

  onSort({ column, direction }: SortEvent) {
    this.store.dispatch(setModelFilteringModel({ modelFiltering: { name: column, sortOrder: direction } }))
  }

}
