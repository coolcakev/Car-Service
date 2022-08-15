import { createFeatureSelector, createSelector } from "@ngrx/store"
import { modelFeatureKey } from "../reduers/model.reducers"
import { ModelState } from "../types/modelState"

export const selectModelFeature=createFeatureSelector<ModelState>(modelFeatureKey)

export const selectModelFiltering=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.modelFiltering
)

export const selectModelPageSize=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.modelFiltering.count
)

export const selectModelPage=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.modelFiltering.page
)

export const selectLoading=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.loading
)
export const selectCurrentModel=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.currentModel
)
export const selectCurrentViewModel=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.currentViewModel
)
export const selectError=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.error
)
export const selectModels=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.models
)
export const selectModelTotal=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.totalModels
)
export const selectModelsForSelect=createSelector(
    selectModelFeature,
    (state:ModelState) =>state.modelsForSelect
)