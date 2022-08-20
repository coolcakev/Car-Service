import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { CarTreeComponent } from './car-tree/car-tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/material.module';
import { EffectsModule } from '@ngrx/effects';
import { TreeEffects } from 'src/store/effects/tree.effects';
import { LetModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule,
    LetModule,
    EffectsModule.forFeature([TreeEffects]),
  ],
  declarations: [
    TreeComponent,
    CarTreeComponent
  ],
  exports: [
    CarTreeComponent
  ]
})
export class TreeModule { }
