import { markFeatureKey } from "src/store/reduers/mark.reducers";
import { modelFeatureKey } from "../reduers/model.reducers";
import { MarkState } from "./markState";
import { ModelState } from "./modelState";

export interface AppState{
    [markFeatureKey]:MarkState,
    [modelFeatureKey]:ModelState
}