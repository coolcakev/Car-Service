import { createAction, props } from "@ngrx/store";
export const resetMarkFilter = createAction('[Mark] Reset Mark Filter');
export const setCurrentMarkDTO = createAction('[Mark] Set Current Edit Mark DTO', props());
export const setMarkFilteringModel = createAction('[Mark] Set Mark Filtering Model', props());
export const getMarksForSelect = createAction('[Mark] Get Marks For Select');
export const getMarksForSelectSuccess = createAction('[Mark] Get Marks For Select Success', props());
export const getMarksForSelectFailure = createAction('[Mark] Get Marks For Select Failure', props());
export const getMarks = createAction('[Mark] Get Marks');
export const getMarksSuccess = createAction('[Mark] Get Marks Success', props());
export const getMarksFailure = createAction('[Mark] Get Marks Failure', props());
export const getMark = createAction('[Mark] Get Mark', props());
export const getMarkSuccess = createAction('[Mark] Get Mark Success', props());
export const getMarkFailure = createAction('[Mark] Get Mark Failure', props());
export const createMark = createAction('[Mark] Create Mark', props());
export const createMarkSuccess = createAction('[Mark] Create Mark Success');
export const createMarkFailure = createAction('[Mark] Create Mark Failure', props());
export const updateMark = createAction('[Mark] Update Mark', props());
export const updateMarkSuccess = createAction('[Mark] Update Mark Success');
export const updateMarkFailure = createAction('[Mark] Update Mark Failure', props());
export const deleteMark = createAction('[Mark] Delete Mark', props());
export const deleteMarkSuccess = createAction('[Mark] Delete Mark Success');
export const deleteMarkFailure = createAction('[Mark] Delete Mark Failure', props());
//# sourceMappingURL=mark.actions.js.map