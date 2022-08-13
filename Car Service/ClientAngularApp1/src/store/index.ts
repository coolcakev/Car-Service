import { ActionReducerMap } from "@ngrx/store"
import { AppState } from "src/store/types"
import { markReducer } from "./reduers/mark.reducers"
import { modelReducer } from "./reduers/model.reducers"
import { treeReducer } from "./reduers/tree.reducers"

export const reducers: ActionReducerMap<AppState> = {
    mark: markReducer,
    model: modelReducer,
    tree:treeReducer
}