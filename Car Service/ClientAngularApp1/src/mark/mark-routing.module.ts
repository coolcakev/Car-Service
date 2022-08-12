import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkComponent } from 'src/mark/mark.component';
import { ViewMarkComponent } from './viewMark/viewMark.component';

const routes: Routes = [
  { path: 'mark', component: MarkComponent },
  { path: 'mark/:id', component: ViewMarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MarkRoutingModule { }