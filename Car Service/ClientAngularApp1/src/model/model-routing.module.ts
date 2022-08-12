import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModelComponent } from "./model.component";
import { ViewModelComponent } from "./viewModel/viewModel.component";

const routes: Routes = [
    { path: 'model', component: ModelComponent },
    { path: 'model/:id', component: ViewModelComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ModelRoutingModule { }