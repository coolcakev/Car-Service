import { createFeatureSelector, createSelector } from "@ngrx/store";
import { markFeatureKey } from "src/store/reduers/mark.reducers";
export const selectMarkFeature = createFeatureSelector(markFeatureKey);
export const selectMarkFiltering = createSelector(selectMarkFeature, (state) => state.markFiltering);
export const selectMarkPageSize = createSelector(selectMarkFeature, (state) => state.markFiltering.count);
export const selectMarkPage = createSelector(selectMarkFeature, (state) => state.markFiltering.page);
export const selectLoading = createSelector(selectMarkFeature, (state) => state.loading);
export const selectCurrentMark = createSelector(selectMarkFeature, (state) => state.currentMark);
export const selectCurrentViewMark = createSelector(selectMarkFeature, (state) => state.currentViewMark);
export const selectError = createSelector(selectMarkFeature, (state) => state.error);
export const selectMarks = createSelector(selectMarkFeature, (state) => state.marks);
export const selectMarkTotal = createSelector(selectMarkFeature, (state) => state.totalMarks);
export const selectMarksForSelect = createSelector(selectMarkFeature, (state) => state.marksForSelect);
//# sourceMappingURL=mark.selectors.js.map