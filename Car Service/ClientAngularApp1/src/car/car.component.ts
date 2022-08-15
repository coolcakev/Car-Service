import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { setCurrentCarDTO } from 'src/store/actions/car.actions';
import { AppState } from 'src/store/types';
import { ModifyModalComponent } from './modal/modify-modal/modify-modal.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private modalService: NgbModal, ) { }

  ngOnInit() {
  }
  openCreteModal() {
    this.store.dispatch(setCurrentCarDTO({ carDTO: null }))
    this.modalService.open(ModifyModalComponent);
  }

}
