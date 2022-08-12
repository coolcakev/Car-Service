import { createFeatureSelector, createSelector } from "@ngrx/store";
import { markFeatureKey } from "src/store/reduers/mark.reducers";
import { MarkState } from "../types/markState";

export const selectMarkFeature=createFeatureSelector<MarkState>(markFeatureKey)

export const selectMarkFiltering=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.markFiltering
)

export const selectMarkPageSize=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.markFiltering.count
)

export const selectMarkPage=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.markFiltering.page
)

export const selectLoading=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.loading
)
export const selectCurrentMark=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.currentMark
)
export const selectCurrentViewMark=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.currentViewMark
)
export const selectError=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.error
)
export const selectMarks=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.marks
)
export const selectMarkTotal=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.totalMarks
)
export const selectMarksForSelect=createSelector(
    selectMarkFeature,
    (state:MarkState) =>state.marksForSelect
)