import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setCarFilteringModel, setGridColomnCount } from 'src/store/actions/car.actions';
import { selectCarTotal, selectPageSize } from 'src/store/selectors/car.selectors';
import { AppState } from 'src/store/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pageSizeOptions = [2, 3, 4]
  selectCarTotal$: Observable<number>
  pageSize$: Observable<number>
  constructor(private store: Store<AppState>) {
    this.selectCarTotal$ = this.store.pipe(
      select(selectCarTotal)
    )
    this.pageSize$ = this.store.pipe(
      select(selectPageSize)
    )
  }

  ngOnInit() {
  }

  handlePageChnge(event: PageEvent) {   
    this.store.dispatch(setGridColomnCount({ page: event.pageIndex+1,colomnCount: event.pageSize }));
  }

}
