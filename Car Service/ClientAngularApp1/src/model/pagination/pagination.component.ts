import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setModelFilteringModel } from 'src/store/actions/model.actions';
import { selectModelPage, selectModelPageSize, selectModelTotal } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page$: Observable<number>
  pageSize$: Observable<number>
  modelsCount$: Observable<number>
  constructor(private store: Store<AppState>) {
    this.page$ = this.store.pipe(
      select(selectModelPage)
    )
    this.pageSize$ = this.store.pipe(
      select(selectModelPageSize)
    )
    this.modelsCount$ = this.store.pipe(
      select(selectModelTotal)
    )
  }

  ngOnInit() {
  }
  handleChangePage(page: number) {
    this.store.dispatch(setModelFilteringModel({ modelFiltering: { page } }));
  }
  handlePageSizeChnge(event: Event) {
    var htmlelement = event.target as HTMLInputElement;
    this.store.dispatch(setModelFilteringModel({ modelFiltering: { count: Number(htmlelement.value) } }));
  }

}
