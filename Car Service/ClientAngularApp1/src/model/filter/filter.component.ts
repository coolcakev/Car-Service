import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getMarksForSelect } from 'src/store/actions/mark.actions';
import { setModelFilteringModel } from 'src/store/actions/model.actions';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
import { selectModelFiltering } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';
import { SelectDTO } from 'src/types/DTOs';
import { delay } from 'src/utility/delay';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  delayId: ReturnType<typeof setTimeout>;
  searchTerm$: Observable<string>;
  markId$: Observable<number>;
  marksForSelect$: Observable<SelectDTO[]>

  constructor(private store: Store<AppState>) {
    this.searchTerm$ = this.store.pipe(
      select(selectModelFiltering),
      map(x => x.searchTerm)
    )
    this.markId$ = this.store.pipe(
      select(selectModelFiltering),
      map(x => x.markId)
    )
    this.marksForSelect$ = this.store.pipe(
      select(selectMarksForSelect),     
    )
  }

  ngOnInit() {
    this.store.dispatch(getMarksForSelect())
  }

  hendleSearchTermChange(event: Event) {
    var target = event.target as HTMLInputElement;
    if (target == null) {
      return;
    }
    clearTimeout(this.delayId);
    delay(500,"delayId", this).then(() => this.store.dispatch(setModelFilteringModel({ modelFiltering: { searchTerm: target.value } })))
  }

  handleMarkIdChange(markId: string) {
    this.store.dispatch(setModelFilteringModel({ modelFiltering: { markId: Number(markId) } }))
  }

}
