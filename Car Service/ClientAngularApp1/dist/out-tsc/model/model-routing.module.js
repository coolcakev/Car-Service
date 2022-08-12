import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModelComponent } from "./model.component";
import { ViewModelComponent } from "./viewModel/viewModel.component";
const routes = [
    { path: 'model', component: ModelComponent },
    { path: 'model/:id', component: ViewModelComponent },
];
let ModelRoutingModule = class ModelRoutingModule {
};
ModelRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], ModelRoutingModule);
export { ModelRoutingModule };
//# sourceMappingURL=model-routing.module.js.map