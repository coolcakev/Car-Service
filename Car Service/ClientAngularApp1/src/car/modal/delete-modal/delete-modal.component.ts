import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCar } from 'src/store/actions/car.actions';
import { selectCurrentCar } from 'src/store/selectors/car.selectors';
import { AppState } from 'src/store/types';
import { CarDTO } from 'src/types/DTOs/CarDTOs/CarDTO';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  car$: Observable<CarDTO>

  constructor(public activeModal: NgbActiveModal,
    private store: Store<AppState>) {
    this.car$ = this.store.pipe(
      select(selectCurrentCar)      
    )
  }
  ngOnInit() {
  }

  handleDelete(id: number){
    this.activeModal.close('Close click')
    this.store.dispatch(deleteCar({id}));
  }

}
