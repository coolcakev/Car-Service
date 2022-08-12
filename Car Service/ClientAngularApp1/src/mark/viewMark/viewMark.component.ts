import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMark } from 'src/store/actions/mark.actions';
import { selectCurrentViewMark } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';
import { ViewMarkDTO } from 'src/types/DTOs/markDTOs/viewMarkDTO';

@Component({
  selector: 'app-viewMark',
  templateUrl: './viewMark.component.html',
  styleUrls: ['./viewMark.component.css']
})
export class ViewMarkComponent implements OnInit {

  mark$: Observable<ViewMarkDTO>
  constructor(private store: Store<AppState>,
    private route: ActivatedRoute) {
      this.mark$ = this.store.pipe(select(selectCurrentViewMark))
     }

  ngOnInit() {   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(getMark({id}))
  }

}
