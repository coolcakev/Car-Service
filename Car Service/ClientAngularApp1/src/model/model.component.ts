import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { resetModelFilter, setCurrentModelDTO } from 'src/store/actions/model.actions';
import { AppState } from 'src/store/types';
import { ModifyModalComponent } from './modal/modifyModal/modifyModal.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(private modalService: NgbModal, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(resetModelFilter());
  }
  openCreteModal(){
    this.store.dispatch(setCurrentModelDTO({ modelDTO: null }))
    this.modalService.open(ModifyModalComponent);
  }

}
