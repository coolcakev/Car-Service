import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkComponent } from 'src/mark/mark.component';
import { ViewMarkComponent } from './viewMark/viewMark.component';
const routes = [
    { path: 'mark', component: MarkComponent },
    { path: 'mark/:id', component: ViewMarkComponent },
];
let MarkRoutingModule = class MarkRoutingModule {
};
MarkRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], MarkRoutingModule);
export { MarkRoutingModule };
//# sourceMappingURL=mark-routing.module.js.map