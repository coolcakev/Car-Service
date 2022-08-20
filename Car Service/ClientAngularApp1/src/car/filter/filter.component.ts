import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/store/types';
import * as CarSelectors from '../../store/selectors/car.selectors'
import * as CarAction from '../../store/actions/car.actions'
import { delay } from 'src/utility/delay';
import { Options, ChangeContext } from "@angular-slider/ngx-slider";
import { SelectDTO } from 'src/types/DTOs';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { setCurrentClickedCarTreeNode } from 'src/store/actions/tree.actions';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public delayId: ReturnType<typeof setTimeout>;
  priceDelayId: ReturnType<typeof setTimeout>;
  searchTerm$: Observable<string>;
  dateTime$: Observable<Date>;
  colors$: Observable<SelectDTO[]>;
  engine$: Observable<SelectDTO[]>;
  maxValue$: Observable<number>
  options$: Observable<Options>

  constructor(private store: Store<AppState>) {
    this.searchTerm$ = this.store.pipe(
      select(CarSelectors.selectCarFiltering),
      map(x => x.searchTerm)
    )
    this.dateTime$ = this.store.pipe(
      select(CarSelectors.selectCarFiltering),
      map(x => x.priceDate)
    )
    this.colors$ = this.store.pipe(
      select(CarSelectors.selectColors),
    )
    this.engine$ = this.store.pipe(
      select(CarSelectors.selectEngine),
    )
    this.maxValue$ = this.store.pipe(
      select(CarSelectors.selectMaxPrice),
    )
    this.options$ = this.store.pipe(
      select(CarSelectors.selectMaxPrice),
      map((maxValue): Options => ({
        floor: 0,
        ceil: maxValue,
      })),
    )

  }

  ngOnInit() {
    this.store.dispatch(CarAction.getDataForAllFilters())
    this.store.dispatch(CarAction.getCars())
  }

  hendleSearchTermChange(event: Event) {
    var target = event.target as HTMLInputElement;
    if (target == null) {
      return;
    }
    clearTimeout(this.delayId);
    delay<FilterComponent>(500, "delayId", this).then(() => this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { searchTerm: target.value } })))
  }

  handleMarkIdChange(markId: string) {
    this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { markId: Number(markId) } }))
  }

  handleColorChange(color: string) {
    this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { color } }))
  }
  handleEngineChange(engine: string) {
    this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { engine } }))
  }
  handlePriceChange(changeContext: ChangeContext) {
    clearTimeout(this.priceDelayId);
    delay<FilterComponent>(500, "priceDelayId", this).then(() => {
      this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { startPrice: changeContext.value, endPrice: changeContext.highValue } }))
    })
  }

  handleDateChange(event: MatDatepickerInputEvent<Date>) {
    this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { priceDate: event.value } }))
  }

  hendleGetCarsAllMarks(event: Event) {
    this.store.dispatch(setCurrentClickedCarTreeNode({
      clickedTreeNode: null
    }))
    this.store.dispatch(CarAction.setCarFilteringModel({ carFiltering: { markId: 0,modelId:0 } }))
  }
}
