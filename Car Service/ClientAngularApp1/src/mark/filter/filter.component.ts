import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {  map, Observable } from 'rxjs';
import { setMarkFilteringModel } from 'src/store/actions/mark.actions';
import { selectMarkFiltering } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';
import { delay } from 'src/utility/delay';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  delayId: ReturnType<typeof setTimeout>;
  searchTerm$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.searchTerm$ = this.store.pipe(     
      select(selectMarkFiltering),
      map(x => x.searchTerm))
  }

  ngOnInit() {
    
  }
  hendleSearchTermChange(event: Event) {
    var target = event.target as HTMLInputElement;
    if (target == null) {
      return;
    }
    clearTimeout(this.delayId);
    delay<FilterComponent>(500,"delayId",this).then(() => this.store.dispatch(setMarkFilteringModel({ markFiltering: { searchTerm: target.value } })))    
  }


}
