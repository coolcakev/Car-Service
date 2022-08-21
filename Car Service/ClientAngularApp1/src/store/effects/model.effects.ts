import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, take } from "rxjs";
import { ModelService } from "src/services/model.services";
import * as ModelAction from "../actions/model.actions"
import { selectCurrentModel, selectModelFiltering } from "../selectors/model.selectors";
import { AppState } from "../types";

@Injectable()
export class ModelEffects {

    getModels$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ModelAction.setModelFilteringModel, ModelAction.getModels),
            mergeMap(() =>
                this.store.pipe(
                    select(selectModelFiltering),
                    take(1),
                    mergeMap(modelFilter =>
                        this.modelService.getModels(modelFilter).pipe(
                            map(dtoWithTotal => ModelAction.getModelsSuccess({ dtoWithTotal })),
                            catchError((error: HttpErrorResponse) =>
                                of(ModelAction.getModelsFailure({ error:  error.error }))
                            )
                        )
                    )
                )
            ),
        ));

    createModel$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ModelAction.createModel),
            map((model) => model.model),
            mergeMap((model) =>
                this.modelService.createModel(model).pipe(
                    map(models => ModelAction.createModelSuccess()),
                    map(models => ModelAction.getModels()),
                    catchError((error: HttpErrorResponse) => of(ModelAction.createModelFailure({ error:  error.error }))))
            ),
        );
    });

    updateModel$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ModelAction.updateModel),
            map((model) => model.model),
            mergeMap((modelEdited) =>
                this.store.pipe(
                    select(selectCurrentModel),
                    take(1),
                    map((model) => {
                        return {
                            ...modelEdited,
                            id: model.id
                        }
                    }),
                    mergeMap((model) =>
                        this.modelService.updateModel(model).pipe(
                            map(models => ModelAction.updateModelSuccess()),
                            map(models => ModelAction.getModels()),
                            catchError((error: HttpErrorResponse) => of(ModelAction.updateModelFailure({ error: error.error }))))
                    ),
                )
            )

        );
    });

    deleteModel$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ModelAction.deleteModel),
            map((action) => action.id),
            mergeMap((modelId) =>
                this.modelService.deleteModel(modelId).pipe(
                    map(models => ModelAction.deleteModelSuccess()),
                    map(models => ModelAction.getModels()),
                    catchError((error: HttpErrorResponse) => of(ModelAction.deleteModelFailure({ error:  error.error }))))
            ),
        );
    });

    getModel$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ModelAction.getModel),
            map((action) => action.id),
            mergeMap((modelId) =>
                this.modelService.getModel(modelId).pipe(
                    map(model => ModelAction.getModelSuccess({model})),                  
                    catchError((error: HttpErrorResponse) => of(ModelAction.getModelFailure({ error:  error.error }))))
            ),
        );
    });

    getModelsForSelect$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ModelAction.getModelsForSelect),
        map(action=>action.markId),
        mergeMap((markId) =>
            this.modelService.getModelForSelect(markId).pipe(
                map(selectDTOs => ModelAction.getModelsForSelectSuccess({ selectDTOs })),
                catchError((error: HttpErrorResponse) =>
                    of(ModelAction.getModelsForSelectFailure({ error: error.error }))
                )
            )
        ),
    ));
    

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private modelService: ModelService
    ) {

    }
}