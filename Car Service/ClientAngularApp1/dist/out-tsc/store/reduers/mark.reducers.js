import { createReducer, on } from "@ngrx/store";
import * as MarkAction from "../actions/mark.actions";
export const markFeatureKey = "mark";
const resetMarkFilter = () => ({
    count: 5,
    name: "name",
    page: 1,
    searchTerm: "",
    sortOrder: "desc"
});
export const initialState = {
    loading: false,
    currentMark: null,
    currentViewMark: null,
    error: null,
    totalMarks: 0,
    marks: [],
    markFiltering: resetMarkFilter(),
    loadingForMarkSelect: false,
    marksForSelect: []
};
export const markReducer = createReducer(initialState, on(MarkAction.resetMarkFilter, (state) => ({ ...state, markFiltering: resetMarkFilter() })), on(MarkAction.setCurrentMarkDTO, (state, action) => ({ ...state, currentMark: action.markDTO })), on(MarkAction.setMarkFilteringModel, (state, action) => ({ ...state, markFiltering: { ...state.markFiltering, ...action.markFiltering, } })), on(MarkAction.getMarksForSelect, state => ({ ...state, loadingForMarkSelect: true, error: null })), on(MarkAction.getMarksForSelectSuccess, (state, action) => ({ ...state, loadingForMarkSelect: false, marksForSelect: action.selectDTOs })), on(MarkAction.getMarksForSelectFailure, (state, action) => ({ ...state, loadingForMarkSelect: false, error: action.error })), on(MarkAction.getMarks, state => ({ ...state, loading: true, error: null })), on(MarkAction.getMarksSuccess, (state, action) => ({ ...state, loading: false, marks: action.dtoWithTotal.dtoObjects, totalMarks: action.dtoWithTotal.total })), on(MarkAction.getMarksFailure, (state, action) => ({ ...state, loading: false, error: action.error })), on(MarkAction.getMark, state => ({ ...state, error: null })), on(MarkAction.getMarkSuccess, (state, action) => ({ ...state, currentViewMark: action.mark })), on(MarkAction.getMarkFailure, (state, action) => ({ ...state, error: action.error })), on(MarkAction.createMark, state => ({ ...state, error: null })), on(MarkAction.createMarkSuccess, state => ({ ...state, error: null, currentMark: null })), on(MarkAction.createMarkFailure, (state, action) => ({ ...state, error: action.error })), on(MarkAction.updateMark, state => ({ ...state, error: null })), on(MarkAction.updateMarkSuccess, state => ({ ...state, error: null, currentMark: null })), on(MarkAction.updateMarkFailure, (state, action) => ({ ...state, error: action.error })), on(MarkAction.deleteMark, state => ({ ...state, error: null })), on(MarkAction.deleteMarkFailure, (state, action) => ({ ...state, error: action.error })));
//# sourceMappingURL=mark.reducers.js.map