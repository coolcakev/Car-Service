import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { setGridColomnCount } from 'src/store/actions/car.actions';
import { selectCars, selectCarTotal, selectColomnCount } from 'src/store/selectors/car.selectors';
import { AppState } from 'src/store/types';
import { CarDTO } from 'src/types/DTOs/CarDTOs/CarDTO';


const countColomnToRowHeight = {

}

@Component({
  selector: 'app-car-grid',
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.css']
})
export class CarGridComponent implements OnInit {

  countColomnToRowHeight: { [name: string]: string } = {
    "2": "2:1",
    "3": "1.2:1",
    '4': "0.9:1"
  };
  colomnCount$: Observable<number>
  cars$: Observable<CarDTO[]>
  constructor(private store: Store<AppState>) {
    this.cars$ = this.store.pipe(
      select(selectCars)
    )
    this.colomnCount$ = this.store.pipe(
      select(selectColomnCount)
    )
  }

  ngOnInit() {
  }
}
