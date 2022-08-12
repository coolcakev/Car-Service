import { createReducer, on } from "@ngrx/store";
import { ModelFilteringModel } from "src/types/DTOs/modelDTOs/markFilteringModel";
import { ModelState } from "../types/modelState";
import * as ModelAction from "../actions/model.actions"

export const modelFeatureKey = "model"

const resetModelFilter = (): ModelFilteringModel => ({
    count: 5,
    name: "name",
    page: 1,
    searchTerm: "",
    sortOrder: "desc",
    markId:0,
})

export const initialState: ModelState = {
    loading: false,
    currentModel: null,
    currentViewModel: null,
    error: null,
    totalModels: 0,
    models: [],    
    modelFiltering: resetModelFilter(),
}

export const modelReducer = createReducer(
    initialState,
    on(ModelAction.resetModelFilter, (state) => ({ ...state, modelFiltering: resetModelFilter() })),
    on(ModelAction.setCurrentModelDTO, (state, action) => ({ ...state, currentModel: action.modelDTO })),
    on(ModelAction.setModelFilteringModel, (state, action) => ({ ...state, modelFiltering: { ...state.modelFiltering, ...action.modelFiltering, } })),

    on(ModelAction.getModels, state => ({ ...state, loading: true, error: null })),
    on(ModelAction.getModelsSuccess, (state, action) => ({ ...state, loading: false, models: action.dtoWithTotal.dtoObjects,totalModels: action.dtoWithTotal.total})),
    on(ModelAction.getModelsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),

    on(ModelAction.getModel, state => ({ ...state, error: null })),
    on(ModelAction.getModelSuccess, (state, action) => ({ ...state, currentViewModel: action.model })),
    on(ModelAction.getModelFailure, (state, action) => ({ ...state, error: action.error })),

    on(ModelAction.createModel, state => ({ ...state, error: null })),
    on(ModelAction.createModelSuccess, state => ({ ...state, error: null, currentModel: null })),
    on(ModelAction.createModelFailure, (state, action) => ({ ...state, error: action.error })),

    on(ModelAction.updateModel, state => ({ ...state, error: null })),
    on(ModelAction.updateModelSuccess, state => ({ ...state, error: null, currentModel: null })),
    on(ModelAction.updateModelFailure, (state, action) => ({ ...state, error: action.error })),

    on(ModelAction.deleteModel, state => ({ ...state, error: null })),
    on(ModelAction.deleteModelFailure, (state, action) => ({ ...state, error: action.error })),
);