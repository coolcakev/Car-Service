import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMarksForSelect } from 'src/store/actions/mark.actions';
import { selectMarksForSelect } from 'src/store/selectors/mark.selectors';
import { AppState } from 'src/store/types';
import { SelectDTO } from 'src/types/DTOs';

@Component({
  selector: 'app-markSelector',
  templateUrl: './markSelector.component.html',
  styleUrls: ['./markSelector.component.css']
})
export class MarkSelectorComponent implements OnInit {

  @Input() hasError: boolean = false;
  @Input() markId: number | null
  @Output() myChange = new EventEmitter<number>();
  marksForSelect$: Observable<SelectDTO[]>

  constructor(private store: Store<AppState>) {
    this.marksForSelect$ = this.store.pipe(
      select(selectMarksForSelect)
    )
   }

  ngOnInit() {
    this.store.dispatch(getMarksForSelect())
  }

  handleMarkIdChange(event: Event) {
    var target = event.target as HTMLInputElement;
    if (target == null) {
      return;
    }
    this.myChange.next(Number(target.value));
  }
}
