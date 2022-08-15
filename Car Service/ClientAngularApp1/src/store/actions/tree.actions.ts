import { createAction, props } from "@ngrx/store";
import { CarTreeNode } from "src/types/DTOs/TreeDTOs";
import { CarTreeNodeInfo } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeInfo";

export const getCarTreesNodes = createAction('[Tree] Get Car Tree Nodes');
export const getCarTreesNodesSuccess = createAction('[Tree] Get Car Tree Nodes Success', props<{ carTreeNodes: CarTreeNode[] }>());
export const getCarTreesNodesFailure = createAction('[Tree] Get Car Tree Nodes Failure', props<{ error: string }>());

export const setCarTreeNodeInfo = createAction('[Tree] Set Car Tree Node Info', props<{ carTreeNodeInfo: CarTreeNodeInfo }>());
export const setCurrentCarTreeNode = createAction('[Tree] Set Current Car Tree Node', props<{ currentTreeNode: CarTreeNode }>());
export const colapseCarTreeNode = createAction('[Tree] Colapse Car Tree Node', props<{ treeNode: CarTreeNode }>());