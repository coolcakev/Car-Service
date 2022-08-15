import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCar } from 'src/store/actions/car.actions';
import { selectCurrentViewCar } from 'src/store/selectors/car.selectors';
import { AppState } from 'src/store/types';
import { ViewCarDTO } from 'src/types/DTOs/CarDTOs/viewCarDTO';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {

  car$: Observable<ViewCarDTO>
  constructor(private store: Store<AppState>,
    private route: ActivatedRoute) {
      this.car$ = this.store.pipe(select(selectCurrentViewCar))
     }

  ngOnInit() {   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(getCar({id}))
  }

}
