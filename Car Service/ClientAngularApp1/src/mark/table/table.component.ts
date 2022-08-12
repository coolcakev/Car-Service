import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SortEvent } from 'src/directives/sortable.directive';
import { getMarks, setCurrentMarkDTO, setMarkFilteringModel } from 'src/store/actions/mark.actions';
import { selectMarks } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';
import { MarkDTO } from 'src/types/DTOs/markDTOs/markDTO';
import { DeleteModalComponent } from '../modal/deleteModal/deleteModal.component';
import { ModifyModalComponent } from '../modal/modifyModal/modifyModal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  marks$: Observable<MarkDTO[]>
  constructor(private store: Store<AppState>, private modalService: NgbModal) {
    this.marks$ = this.store.pipe(select(selectMarks))
  }


  ngOnInit() {
    this.store.dispatch(getMarks());
  }

  editHandle(mark: MarkDTO) {
    this.modalService.open(ModifyModalComponent);
    this.store.dispatch(setCurrentMarkDTO({ markDTO: mark }));
  }
  deleteHandle(mark: MarkDTO) {
    this.modalService.open(DeleteModalComponent);
    this.store.dispatch(setCurrentMarkDTO({ markDTO: mark }));
  }

  onSort({ column, direction }: SortEvent) {
    this.store.dispatch(setMarkFilteringModel({ markFiltering: { name: column, sortOrder: direction } }))
  }

}
