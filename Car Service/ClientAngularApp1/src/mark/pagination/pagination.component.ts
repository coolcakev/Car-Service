import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { setMarkFilteringModel } from 'src/store/actions/mark.actions';
import { selectMarkPage, selectMarkPageSize, selectMarkTotal } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page$: Observable<number>
  pageSize$: Observable<number>
  marksCount$: Observable<number>
  constructor(private store: Store<AppState>) {
    this.page$ = this.store.pipe(
      select(selectMarkPage)
    )
    this.pageSize$ = this.store.pipe(
      select(selectMarkPageSize)
    )
    this.marksCount$ = this.store.pipe(
      select(selectMarkTotal)
    )
  }

  ngOnInit() {
  }
  handleChangePage(page: number) {
    this.store.dispatch(setMarkFilteringModel({ markFiltering: { page } }));
  }
  handlePageSizeChnge(event: Event) {
    var htmlelement = event.target as HTMLInputElement;
    this.store.dispatch(setMarkFilteringModel({ markFiltering: { count: Number(htmlelement.value) } }));
  }
}
