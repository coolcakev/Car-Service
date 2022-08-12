import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { NgbdSortableHeader } from 'src/directives/sortable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BasicComponent,
    NgbdSortableHeader
  ],
  exports: [
    NgbdSortableHeader
  ]
})
export class BasicModule { }
