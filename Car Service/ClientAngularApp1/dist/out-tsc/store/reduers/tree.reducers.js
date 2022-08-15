import { CarTreeNodeType } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeType";
import * as TreeAction from "../actions/tree.actions";
import { createReducer, on } from "@ngrx/store";
export const treeFeatureKey = "tree";
const resetTreeNodeInfo = () => ({
    level: CarTreeNodeType.Default,
    markId: -1,
});
export const initialState = {
    currentCarTreeNode: null,
    carTreeNodes: [],
    carTreeNodesLoading: false,
    carTreeNodeInfo: resetTreeNodeInfo(),
    error: ""
};
const getCarTreeNodes = (state, nodes) => {
    const { carTreeNodes, currentCarTreeNode } = state;
    if (currentCarTreeNode == null) {
        return nodes;
    }
    const index = carTreeNodes.findIndex(x => x.id == currentCarTreeNode.id);
    if (index < 0 || !nodes) {
        return state.carTreeNodes;
    }
    const newCarTreeNodes = [...carTreeNodes];
    newCarTreeNodes.splice(index + 1, 0, ...nodes);
    return newCarTreeNodes;
};
const colapseCarTreeNode = (state, node) => {
    const { carTreeNodes, currentCarTreeNode } = state;
    const index = carTreeNodes.findIndex(x => x.id == node.id);
    if (!node || index < 0) {
        return carTreeNodes;
    }
    const newCarTreeNodes = [...carTreeNodes];
    let count = 0;
    for (let i = index + 1; i < newCarTreeNodes.length && newCarTreeNodes[i].level > node.level; i++, count++) { }
    newCarTreeNodes.splice(index + 1, count);
    return newCarTreeNodes;
};
export const treeReducer = createReducer(initialState, on(TreeAction.setCarTreeNodeInfo, (state, action) => ({ ...state, carTreeNodeInfo: { ...state.carTreeNodeInfo, ...action.carTreeNodeInfo, } })), on(TreeAction.setCurrentCarTreeNode, (state, action) => ({ ...state, currentCarTreeNode: action.currentTreeNode })), on(TreeAction.colapseCarTreeNode, (state, action) => ({ ...state, carTreeNodes: colapseCarTreeNode(state, action.treeNode) })), on(TreeAction.getCarTreesNodes, state => ({ ...state, carTreeNodesLoading: true, error: null })), on(TreeAction.getCarTreesNodesSuccess, (state, action) => ({ ...state, carTreeNodesLoading: false, carTreeNodes: getCarTreeNodes(state, action.carTreeNodes) })), on(TreeAction.getCarTreesNodesFailure, (state, action) => ({ ...state, carTreeNodesLoading: false, error: action.error })));
//# sourceMappingURL=tree.reducers.js.map