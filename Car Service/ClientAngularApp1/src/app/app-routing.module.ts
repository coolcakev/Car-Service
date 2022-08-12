import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from 'src/car/car.component';

const routes: Routes = [
  { path: '', redirectTo: '/mark' ,pathMatch: 'full'}, 
  { path: 'car', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
