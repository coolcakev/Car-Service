import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkComponent } from './mark.component';
import { FilterComponent } from './filter/filter.component';
import { StoreModule } from '@ngrx/store';
import { markFeatureKey, markReducer } from 'src/store/reduers/mark.reducers';
import { TableComponent } from './table/table.component';
import { EffectsModule } from '@ngrx/effects';
import { MarkEffects } from 'src/store/effects/mark.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModifyModalComponent } from './modal/modifyModal/modifyModal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LetModule } from '@ngrx/component';
import { DeleteModalComponent } from './modal/deleteModal/deleteModal.component';
import { MarkRoutingModule } from './mark-routing.module';
import { ViewMarkComponent } from './viewMark/viewMark.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BasicModule } from 'src/basic/basic.module';
let MarkModule = class MarkModule {
};
MarkModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            NgbModule,
            ReactiveFormsModule,
            LetModule,
            MarkRoutingModule,
            BasicModule,
            EffectsModule.forFeature([MarkEffects]),
            StoreModule.forFeature(markFeatureKey, markReducer),
        ],
        declarations: [
            MarkComponent,
            FilterComponent,
            TableComponent,
            ModifyModalComponent,
            DeleteModalComponent,
            ViewMarkComponent,
            PaginationComponent,
        ],
        bootstrap: [MarkComponent]
    })
], MarkModule);
export { MarkModule };
//# sourceMappingURL=mark.module.js.map