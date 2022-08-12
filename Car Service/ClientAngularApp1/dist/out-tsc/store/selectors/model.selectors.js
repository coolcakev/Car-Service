import { createFeatureSelector, createSelector } from "@ngrx/store";
import { modelFeatureKey } from "../reduers/model.reducers";
export const selectModelFeature = createFeatureSelector(modelFeatureKey);
export const selectModelFiltering = createSelector(selectModelFeature, (state) => state.modelFiltering);
export const selectModelPageSize = createSelector(selectModelFeature, (state) => state.modelFiltering.count);
export const selectModelPage = createSelector(selectModelFeature, (state) => state.modelFiltering.page);
export const selectLoading = createSelector(selectModelFeature, (state) => state.loading);
export const selectCurrentModel = createSelector(selectModelFeature, (state) => state.currentModel);
export const selectCurrentViewModel = createSelector(selectModelFeature, (state) => state.currentViewModel);
export const selectError = createSelector(selectModelFeature, (state) => state.error);
export const selectModels = createSelector(selectModelFeature, (state) => state.models);
export const selectModelTotal = createSelector(selectModelFeature, (state) => state.totalModels);
//# sourceMappingURL=model.selectors.js.map