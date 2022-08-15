import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { select } from "@ngrx/store";
import { catchError, map, mergeMap, of, take } from "rxjs";
import * as TreeAction from "../actions/tree.actions";
import { selectCarTreeNodeInfo } from "../selectors/tree.selectors";
let TreeEffects = class TreeEffects {
    constructor(actions$, store, treeService) {
        this.actions$ = actions$;
        this.store = store;
        this.treeService = treeService;
        this.getCarTreesNodes$ = createEffect(() => {
            return this.actions$.pipe(ofType(TreeAction.getCarTreesNodes), mergeMap(() => this.store.pipe(select(selectCarTreeNodeInfo), take(1), mergeMap((carTreeNodeInfo) => {
                return this.treeService.getCarTreeNode(carTreeNodeInfo).pipe(map(carTreeNodes => TreeAction.getCarTreesNodesSuccess({ carTreeNodes })), catchError((error) => of(TreeAction.getCarTreesNodesFailure({ error: error?.message }))));
            }))));
        });
        this.setCarTreeNodeInfo$ = createEffect(() => {
            return this.actions$.pipe(ofType(TreeAction.setCarTreeNodeInfo), map(() => TreeAction.getCarTreesNodes()));
        });
    }
};
TreeEffects = __decorate([
    Injectable()
], TreeEffects);
export { TreeEffects };
//# sourceMappingURL=tree.effects.js.map