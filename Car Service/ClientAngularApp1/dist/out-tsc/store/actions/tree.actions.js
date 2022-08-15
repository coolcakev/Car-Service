import { createAction, props } from "@ngrx/store";
export const getCarTreesNodes = createAction('[Tree] Get Car Tree Nodes');
export const getCarTreesNodesSuccess = createAction('[Tree] Get Car Tree Nodes Success', props());
export const getCarTreesNodesFailure = createAction('[Tree] Get Car Tree Nodes Failure', props());
export const setCarTreeNodeInfo = createAction('[Tree] Set Car Tree Node Info', props());
export const setCurrentCarTreeNode = createAction('[Tree] Set Current Car Tree Node', props());
export const colapseCarTreeNode = createAction('[Tree] Colapse Car Tree Node', props());
//# sourceMappingURL=tree.actions.js.map