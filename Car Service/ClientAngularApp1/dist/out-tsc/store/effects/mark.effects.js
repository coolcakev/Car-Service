import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { select } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, take } from 'rxjs';
import * as MarkAction from "../actions/mark.actions";
import { selectCurrentMark, selectMarkFiltering } from '../selectors/mark.selectors';
let MarkEffects = class MarkEffects {
    constructor(actions$, store, markService) {
        this.actions$ = actions$;
        this.store = store;
        this.markService = markService;
        this.getMarks$ = createEffect(() => this.actions$.pipe(ofType(MarkAction.setMarkFilteringModel, MarkAction.getMarks), mergeMap(() => this.store.pipe(select(selectMarkFiltering), take(1), mergeMap(markFilter => this.markService.getMarks(markFilter).pipe(map(dtoWithTotal => MarkAction.getMarksSuccess({ dtoWithTotal })), catchError((error) => of(MarkAction.getMarksFailure({ error: error.error })))))))));
        this.getMarksForSelect$ = createEffect(() => this.actions$.pipe(ofType(MarkAction.getMarksForSelect), mergeMap(() => this.markService.getMarkForSelect().pipe(map(selectDTOs => MarkAction.getMarksForSelectSuccess({ selectDTOs })), catchError((error) => of(MarkAction.getMarksForSelectFailure({ error: error.error })))))));
        this.createMark$ = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.createMark), map((mark) => mark.mark), mergeMap((mark) => this.markService.createMark(mark).pipe(switchMap(() => of(MarkAction.createMarkSuccess(), MarkAction.getMarks())), catchError((error) => of(MarkAction.createMarkFailure({ error: error.error }))))));
        });
        this.updateMark$ = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.updateMark), map((mark) => mark.mark), mergeMap((markEdited) => this.store.pipe(select(selectCurrentMark), take(1), map((mark) => {
                return {
                    ...markEdited,
                    id: mark.id
                };
            }), mergeMap((mark) => this.markService.updateMark(mark).pipe(switchMap(() => of(MarkAction.updateMarkSuccess(), MarkAction.getMarks())), catchError((error) => of(MarkAction.updateMarkFailure({ error: error.error }))))))));
        });
        this.deleteMark$ = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.deleteMark), map((action) => action.id), mergeMap((markId) => this.markService.deleteMark(markId).pipe(switchMap(() => of(MarkAction.deleteMarkSuccess(), MarkAction.getMarks())), catchError((error) => of(MarkAction.deleteMarkFailure({ error: error.error }))))));
        });
        this.getMark$ = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.getMark), map((action) => action.id), mergeMap((markId) => this.markService.getMark(markId).pipe(map(mark => MarkAction.getMarkSuccess({ mark })), catchError((error) => of(MarkAction.getMarkFailure({ error: error.error }))))));
        });
    }
};
MarkEffects = __decorate([
    Injectable()
], MarkEffects);
export { MarkEffects };
//# sourceMappingURL=mark.effects.js.map