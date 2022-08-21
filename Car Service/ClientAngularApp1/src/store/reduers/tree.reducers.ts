import { CarTreeNodeInfo } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeInfo";
import { CarTreeNodeType } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeType";
import { TreeState } from "../types/TreeState";
import * as TreeAction from "../actions/tree.actions"
import { createReducer, on } from "@ngrx/store";
import { CarTreeNode } from "src/types/DTOs/TreeDTOs";
export const treeFeatureKey = "tree"

const resetTreeNodeInfo = (): CarTreeNodeInfo => ({
    level: CarTreeNodeType.Default,
    markId: -1,
})

export const initialState: TreeState = {
    currentClickedCarTreeNode: null,
    currentCarTreeNode: null,
    carTreeNodes: [],
    carTreeNodesLoading: false,
    carTreeNodeInfo: resetTreeNodeInfo(),
    error: null
}

const getCarTreeNodes = (state: TreeState, nodes: CarTreeNode[]): CarTreeNode[] => {
    const { carTreeNodes, currentCarTreeNode } = state

    if (currentCarTreeNode == null) {
        return nodes
    }
    const index = carTreeNodes.findIndex(x => x.id == currentCarTreeNode.id && (x.level == currentCarTreeNode.level));

    if (index < 0 || !nodes) {
        return state.carTreeNodes
    }
    const newCarTreeNodes = [...carTreeNodes]
    newCarTreeNodes.splice(index + 1, 0, ...nodes);
    return newCarTreeNodes
}
const colapseCarTreeNode = (state: TreeState, node: CarTreeNode): CarTreeNode[] => {
    const { carTreeNodes, currentCarTreeNode } = state
    const index = carTreeNodes.findIndex(x => x.id == node.id && (x.level == node.level));

    if (!node || index < 0) {
        return carTreeNodes
    }

    const newCarTreeNodes = [...carTreeNodes]

    let count = 0;
    for (
        let i = index + 1;
        i < newCarTreeNodes.length && newCarTreeNodes[i].level > node.level;
        i++, count++
    ) { }
    newCarTreeNodes.splice(index + 1, count);
    return newCarTreeNodes
}
export const treeReducer = createReducer(
    initialState,
    on(TreeAction.setCarTreeNodeInfo, (state, action) => ({ ...state, carTreeNodeInfo: { ...state.carTreeNodeInfo, ...action.carTreeNodeInfo, } })),
    on(TreeAction.setCurrentCarTreeNode, (state, action) => ({ ...state, currentCarTreeNode: action.currentTreeNode })),
    on(TreeAction.setCurrentClickedCarTreeNode, (state, action) => ({ ...state, currentClickedCarTreeNode: action.clickedTreeNode })),
    on(TreeAction.colapseCarTreeNode, (state, action) => ({ ...state, carTreeNodes: colapseCarTreeNode(state, action.treeNode) })),

    on(TreeAction.getCarTreesNodes, state => ({ ...state, carTreeNodesLoading: true, error: null })),
    on(TreeAction.getCarTreesNodesSuccess, (state, action) => ({ ...state, carTreeNodesLoading: false, carTreeNodes: getCarTreeNodes(state, action.carTreeNodes) })),
    on(TreeAction.getCarTreesNodesFailure, (state, action) => ({ ...state, carTreeNodesLoading: false, error: action.error })),
);