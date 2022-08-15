import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { select } from "@ngrx/store";
import { catchError, map, mergeMap, of, take } from "rxjs";
import * as ModelAction from "../actions/model.actions";
import { selectCurrentModel, selectModelFiltering } from "../selectors/model.selectors";
let ModelEffects = class ModelEffects {
    constructor(actions$, store, modelService) {
        this.actions$ = actions$;
        this.store = store;
        this.modelService = modelService;
        this.getModels$ = createEffect(() => this.actions$.pipe(ofType(ModelAction.setModelFilteringModel, ModelAction.getModels), mergeMap(() => this.store.pipe(select(selectModelFiltering), take(1), mergeMap(modelFilter => this.modelService.getModels(modelFilter).pipe(map(dtoWithTotal => ModelAction.getModelsSuccess({ dtoWithTotal })), catchError((error) => of(ModelAction.getModelsFailure({ error: error?.message })))))))));
        this.createModel$ = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.createModel), map((model) => model.model), mergeMap((model) => this.modelService.createModel(model).pipe(map(models => ModelAction.createModelSuccess()), map(models => ModelAction.getModels()), catchError((error) => of(ModelAction.createModelFailure({ error: error.message }))))));
        });
        this.updateModel$ = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.updateModel), map((model) => model.model), mergeMap((modelEdited) => this.store.pipe(select(selectCurrentModel), take(1), map((model) => {
                return {
                    ...modelEdited,
                    id: model.id
                };
            }), mergeMap((model) => this.modelService.updateModel(model).pipe(map(models => ModelAction.updateModelSuccess()), map(models => ModelAction.getModels()), catchError((error) => of(ModelAction.updateModelFailure({ error: error.message }))))))));
        });
        this.deleteModel$ = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.deleteModel), map((action) => action.id), mergeMap((modelId) => this.modelService.deleteModel(modelId).pipe(map(models => ModelAction.deleteModelSuccess()), map(models => ModelAction.getModels()), catchError((error) => of(ModelAction.deleteModelFailure({ error: error.message }))))));
        });
        this.getModel$ = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.getModel), map((action) => action.id), mergeMap((modelId) => this.modelService.getModel(modelId).pipe(map(model => ModelAction.getModelSuccess({ model })), catchError((error) => of(ModelAction.getModelFailure({ error: error.message }))))));
        });
        this.getModelsForSelect$ = createEffect(() => this.actions$.pipe(ofType(ModelAction.getModelsForSelect), map(action => action.markId), mergeMap((markId) => this.modelService.getModelForSelect(markId).pipe(map(selectDTOs => ModelAction.getModelsForSelectSuccess({ selectDTOs })), catchError((error) => of(ModelAction.getModelsForSelectFailure({ error: error?.message })))))));
    }
};
ModelEffects = __decorate([
    Injectable()
], ModelEffects);
export { ModelEffects };
//# sourceMappingURL=model.effects.js.map