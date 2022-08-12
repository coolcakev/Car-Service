import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model.component';
import { ViewModelComponent } from './viewModel/viewModel.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ModelEffects } from 'src/store/effects/model.effects';
import { modelFeatureKey, modelReducer } from 'src/store/reduers/model.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { MarkEffects } from 'src/store/effects/mark.effects';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelRoutingModule } from './model-routing.module';
import { BasicModule } from 'src/basic/basic.module';
import { ModifyModalComponent } from './modal/modifyModal/modifyModal.component';
import { LetModule } from '@ngrx/component';
import { MarkSelectorComponent } from './markSelector/markSelector.component';
import { DeleteModalComponent } from './modal/deleteModal/deleteModal.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    ModelRoutingModule,
    BasicModule,
    LetModule,
    EffectsModule.forFeature([ModelEffects,MarkEffects]),
    StoreModule.forFeature(modelFeatureKey, modelReducer),  
  ],
  declarations: [
    ModelComponent,
    ViewModelComponent,
    FilterComponent,
    TableComponent,
    ModifyModalComponent,
    MarkSelectorComponent,
    DeleteModalComponent,
    PaginationComponent,
  ],
  bootstrap: [ModelComponent]
})
export class ModelModule { }
