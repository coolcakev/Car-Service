import { createFeatureSelector, createSelector } from "@ngrx/store";
import { treeFeatureKey } from "../reduers/tree.reducers";
export const selectTreeFeature = createFeatureSelector(treeFeatureKey);
export const selectCarTreeNodeInfo = createSelector(selectTreeFeature, (state) => state.carTreeNodeInfo);
export const selectCarTreeNodes = createSelector(selectTreeFeature, (state) => state.carTreeNodes);
export const selectCarTreeNodesLoading = createSelector(selectTreeFeature, (state) => state.carTreeNodesLoading);
export const selectCurrentCarTreeNode = createSelector(selectTreeFeature, (state) => state.currentCarTreeNode);
//# sourceMappingURL=tree.selectors.js.map