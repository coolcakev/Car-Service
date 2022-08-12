import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getModel } from 'src/store/actions/model.actions';
import { selectCurrentViewModel } from 'src/store/selectors/model.selectors';
import { AppState } from 'src/store/types';
import { ViewModelDTO } from 'src/types/DTOs/modelDTOs/viewModelDTO';

@Component({
  selector: 'app-viewModel',
  templateUrl: './viewModel.component.html',
  styleUrls: ['./viewModel.component.css']
})
export class ViewModelComponent implements OnInit {

  model$: Observable<ViewModelDTO>
  constructor(private store: Store<AppState>,
    private route: ActivatedRoute) {
      this.model$ = this.store.pipe(select(selectCurrentViewModel))
     }

  ngOnInit() {   
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(getModel({id}))
  }

}
