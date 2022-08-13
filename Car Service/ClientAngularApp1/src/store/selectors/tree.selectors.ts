import { createFeatureSelector, createSelector } from "@ngrx/store"
import { treeFeatureKey } from "../reduers/tree.reducers"
import { TreeState } from "../types/TreeState"

export const selectTreeFeature=createFeatureSelector<TreeState>(treeFeatureKey)

export const selectCarTreeNodeInfo=createSelector(
    selectTreeFeature,
    (state:TreeState) =>state.carTreeNodeInfo
)
export const selectCarTreeNodes=createSelector(
    selectTreeFeature,
    (state:TreeState) =>state.carTreeNodes
)
export const selectCarTreeNodesLoading=createSelector(
    selectTreeFeature,
    (state:TreeState) =>state.carTreeNodesLoading
)
export const selectCurrentCarTreeNode=createSelector(
    selectTreeFeature,
    (state:TreeState) =>state.currentCarTreeNode
)