import { CarTreeNode } from "src/types/DTOs/TreeDTOs";
import { CarTreeNodeInfo } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeInfo";
import { CarTreeNodeType } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeType";
import { TreeNode } from "src/types/DTOs/TreeDTOs/TreeNode";

export interface TreeState {
    currentClickedCarTreeNode:CarTreeNode,
    currentCarTreeNode:CarTreeNode,
    carTreeNodes: CarTreeNode[],
    carTreeNodeInfo: CarTreeNodeInfo,
    carTreeNodesLoading: boolean,
    error: string | null
}