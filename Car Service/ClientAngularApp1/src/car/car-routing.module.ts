import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarComponent } from "./car.component";
import { ViewCarComponent } from "./view-car/view-car.component";

const routes: Routes = [
    { path: 'car', component: CarComponent },
    { path: 'car/:id', component: ViewCarComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class CarRoutingModule { }