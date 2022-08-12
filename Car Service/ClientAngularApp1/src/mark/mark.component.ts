import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { resetMarkFilter, setCurrentMarkDTO } from 'src/store/actions/mark.actions';
import { AppState } from 'src/store/types';
import { ModifyModalComponent } from './modal/modifyModal/modifyModal.component';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  constructor(private modalService: NgbModal, private store: Store<AppState>) { }

  ngOnInit() {
   this.store.dispatch(resetMarkFilter());
  }
  openCreteModal() {
    this.store.dispatch(setCurrentMarkDTO({ markDTO: null }))
    this.modalService.open(ModifyModalComponent);
  }
}
