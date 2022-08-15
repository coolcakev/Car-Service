import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { DeleteModalComponent } from 'src/car/modal/delete-modal/delete-modal.component';
import { ModifyModalComponent } from 'src/car/modal/modify-modal/modify-modal.component';
import { setCurrentCarDTO } from 'src/store/actions/car.actions';
import { AppState } from 'src/store/types';
import { CarDTO } from 'src/types/DTOs/CarDTOs/CarDTO';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car: CarDTO
  constructor(private modalService: NgbModal, private store: Store<AppState>) { }

  ngOnInit() {
  }
  editHandle(car: CarDTO) {
    this.modalService.open(ModifyModalComponent);
    this.store.dispatch(setCurrentCarDTO({ carDTO: car }));
  }
  deleteHandle(car: CarDTO) {
    this.modalService.open(DeleteModalComponent);
    this.store.dispatch(setCurrentCarDTO({ carDTO: car }));
  }

}
