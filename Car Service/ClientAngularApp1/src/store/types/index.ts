import { markFeatureKey } from "src/store/reduers/mark.reducers";
import { carFeatureKey } from "../reduers/car.reducers";
import { modelFeatureKey } from "../reduers/model.reducers";
import { treeFeatureKey } from "../reduers/tree.reducers";
import { CarState } from "./CarState";
import { MarkState } from "./markState";
import { ModelState } from "./modelState";
import { TreeState } from "./TreeState";

export interface AppState{
    [markFeatureKey]:MarkState,
    [modelFeatureKey]:ModelState
    [treeFeatureKey]:TreeState
    [carFeatureKey]:CarState
}