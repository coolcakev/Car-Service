import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, take } from "rxjs";
import { TreeService } from "src/services/tree.services";
import { AppState } from "../types";
import * as TreeAction from "../actions/tree.actions"
import { selectCarTreeNodeInfo } from "../selectors/tree.selectors";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class TreeEffects {

    getCarTreesNodes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TreeAction.getCarTreesNodes),     
            mergeMap(() =>
                this.store.pipe(
                    select(selectCarTreeNodeInfo),
                    take(1),
                    mergeMap((carTreeNodeInfo) => {
                        return this.treeService.getCarTreeNode(carTreeNodeInfo).pipe(
                            map(carTreeNodes => TreeAction.getCarTreesNodesSuccess({ carTreeNodes })),
                            catchError((error: HttpErrorResponse) =>
                                of(TreeAction.getCarTreesNodesFailure({ error: error?.message }))
                            )
                        )
                    })
                )
            ),
        );
    });

    setCarTreeNodeInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TreeAction.setCarTreeNodeInfo),
            map(() => TreeAction.getCarTreesNodes())
        );
    });

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private treeService: TreeService
    ) {

    }
}