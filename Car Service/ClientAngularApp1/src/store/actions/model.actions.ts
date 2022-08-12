import { createAction, props } from "@ngrx/store";
import { DTOWithTotal } from "src/types/DTOs";
import { CreateModelDTO } from "src/types/DTOs/modelDTOs/createModelDTO";
import { ModelFilteringModel } from "src/types/DTOs/modelDTOs/markFilteringModel";
import { ModelDTO } from "src/types/DTOs/modelDTOs/modelDTO";
import { UpdateModelDTO } from "src/types/DTOs/modelDTOs/updateModelDTO";
import { ViewModelDTO } from "src/types/DTOs/modelDTOs/viewModelDTO";

export const resetModelFilter= createAction('[Model] Reset Model Filter')
export const setCurrentModelDTO = createAction('[Model] Set Current Edit Model DTO', props<{ modelDTO: ModelDTO }>());
export const setModelFilteringModel = createAction('[Model] Set Model Filtering Model', props<{ modelFiltering: Partial<ModelFilteringModel> }>());

export const getModels = createAction('[Model] Get Models');
export const getModelsSuccess = createAction('[Model] Get Models Success', props<{ dtoWithTotal: DTOWithTotal<ModelDTO> }>());
export const getModelsFailure = createAction('[Model] Get Models Failure', props<{ error: string }>());

export const getModel = createAction('[Model] Get Model',props<{id:number}>());
export const getModelSuccess = createAction('[Model] Get Model Success', props<{ model: ViewModelDTO }>());
export const getModelFailure = createAction('[Model] Get Model Failure', props<{ error: string }>());

export const createModel = createAction('[Model] Create Model',props<{model:CreateModelDTO}>());
export const createModelSuccess = createAction('[Model] Create Model Success');
export const createModelFailure = createAction('[Model] Create Model Failure', props<{ error: string }>());

export const updateModel = createAction('[Model] Update Model',props<{model:UpdateModelDTO}>());
export const updateModelSuccess = createAction('[Model] Update Model Success');
export const updateModelFailure = createAction('[Model] Update Model Failure', props<{ error: string }>());

export const deleteModel = createAction('[Model] Delete Model',props<{id:number}>());
export const deleteModelSuccess = createAction('[Model] Delete Model Success');
export const deleteModelFailure = createAction('[Model] Delete Model Failure', props<{ error: string }>());