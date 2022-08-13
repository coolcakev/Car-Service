import { markFeatureKey } from "src/store/reduers/mark.reducers";
import { modelFeatureKey } from "../reduers/model.reducers";
import { treeFeatureKey } from "../reduers/tree.reducers";
import { MarkState } from "./markState";
import { ModelState } from "./modelState";
import { TreeState } from "./TreeState";

export interface AppState{
    [markFeatureKey]:MarkState,
    [modelFeatureKey]:ModelState
    [treeFeatureKey]:TreeState
}