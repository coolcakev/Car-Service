import { createAction, props } from "@ngrx/store"
import { DTOWithTotal, SelectDTO } from "src/types/DTOs";
import { CreateMarkDTO } from "src/types/DTOs/markDTOs/createMarkDTO";
import { MarkDTO } from "src/types/DTOs/markDTOs/markDTO";
import { MarkFilteringModel } from "src/types/DTOs/markDTOs/markFilteringModel";
import { UpdateMarkDTO } from "src/types/DTOs/markDTOs/updateMarkDTO";
import { ViewMarkDTO } from "src/types/DTOs/markDTOs/viewMarkDTO";

export const resetMarkFilter= createAction('[Mark] Reset Mark Filter')
export const setCurrentMarkDTO = createAction('[Mark] Set Current Edit Mark DTO', props<{ markDTO: MarkDTO }>());
export const setMarkFilteringModel = createAction('[Mark] Set Mark Filtering Model', props<{ markFiltering: Partial<MarkFilteringModel> }>());

export const getMarksForSelect = createAction('[Mark] Get Marks For Select');
export const getMarksForSelectSuccess = createAction('[Mark] Get Marks For Select Success', props<{ selectDTOs: SelectDTO[] }>());
export const getMarksForSelectFailure = createAction('[Mark] Get Marks For Select Failure', props<{ error: string }>());

export const getMarks = createAction('[Mark] Get Marks');
export const getMarksSuccess = createAction('[Mark] Get Marks Success', props<{ dtoWithTotal: DTOWithTotal<MarkDTO> }>());
export const getMarksFailure = createAction('[Mark] Get Marks Failure', props<{ error: string }>());

export const getMark = createAction('[Mark] Get Mark',props<{id:number}>());
export const getMarkSuccess = createAction('[Mark] Get Mark Success', props<{ mark: ViewMarkDTO }>());
export const getMarkFailure = createAction('[Mark] Get Mark Failure', props<{ error: string }>());

export const createMark = createAction('[Mark] Create Mark',props<{mark:CreateMarkDTO}>());
export const createMarkSuccess = createAction('[Mark] Create Mark Success');
export const createMarkFailure = createAction('[Mark] Create Mark Failure', props<{ error: string }>());

export const updateMark = createAction('[Mark] Update Mark',props<{mark:UpdateMarkDTO}>());
export const updateMarkSuccess = createAction('[Mark] Update Mark Success');
export const updateMarkFailure = createAction('[Mark] Update Mark Failure', props<{ error: string }>());

export const deleteMark = createAction('[Mark] Delete Mark',props<{id:number}>());
export const deleteMarkSuccess = createAction('[Mark] Delete Mark Success');
export const deleteMarkFailure = createAction('[Mark] Delete Mark Failure', props<{ error: string }>());