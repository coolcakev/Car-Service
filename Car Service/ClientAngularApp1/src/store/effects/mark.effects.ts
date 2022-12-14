import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap, take, tap } from 'rxjs';
import { MarkService } from 'src/services/mark.service';
import * as MarkAction from "../actions/mark.actions"
import { selectCurrentMark, selectMarkFiltering } from '../selectors/mark.selectors';
import { AppState } from '../types';

@Injectable()
export class MarkEffects {

    getMarks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MarkAction.setMarkFilteringModel, MarkAction.getMarks),
            mergeMap(() =>
                this.store.pipe(
                    select(selectMarkFiltering),
                    take(1),
                    mergeMap(markFilter =>
                        this.markService.getMarks(markFilter).pipe(
                            map(dtoWithTotal => MarkAction.getMarksSuccess({ dtoWithTotal })),
                            catchError((error: HttpErrorResponse) =>
                                of(MarkAction.getMarksFailure({ error:  error.error }))
                            )
                        )
                    )
                )
            ),
        ));

    getMarksForSelect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MarkAction.getMarksForSelect),
            mergeMap(() =>
                this.markService.getMarkForSelect().pipe(
                    map(selectDTOs => MarkAction.getMarksForSelectSuccess({ selectDTOs })),
                    catchError((error: HttpErrorResponse) =>
                        of(MarkAction.getMarksForSelectFailure({ error:  error.error }))
                    )
                )
            ),
        ));

    createMark$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MarkAction.createMark),
            map((mark) => mark.mark),
            mergeMap((mark) =>
                this.markService.createMark(mark).pipe(
                    switchMap(()=>of(
                        MarkAction.createMarkSuccess(),
                        MarkAction.getMarks()
                    )),                   
                    catchError((error: HttpErrorResponse) => of(MarkAction.createMarkFailure({ error:  error.error }))))
            ),
        );
    });

    updateMark$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MarkAction.updateMark),
            map((mark) => mark.mark),
            mergeMap((markEdited) =>
                this.store.pipe(
                    select(selectCurrentMark),
                    take(1),
                    map((mark) => {
                        return {
                            ...markEdited,
                            id: mark.id
                        }
                    }),
                    mergeMap((mark) =>
                        this.markService.updateMark(mark).pipe(
                            switchMap(()=>of(
                                MarkAction.updateMarkSuccess(),
                                MarkAction.getMarks()
                            )),
                           
                            catchError((error: HttpErrorResponse) => of(MarkAction.updateMarkFailure({ error:  error.error }))))
                    ),
                )
            )

        );
    });

    deleteMark$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MarkAction.deleteMark),
            map((action) => action.id),
            mergeMap((markId) =>
                this.markService.deleteMark(markId).pipe(
                    switchMap(()=>of(
                        MarkAction.deleteMarkSuccess(),
                        MarkAction.getMarks()
                    )),                  
                    catchError((error: HttpErrorResponse) => of(MarkAction.deleteMarkFailure({ error:  error.error }))))
            ),
        );
    });

    getMark$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MarkAction.getMark),
            map((action) => action.id),
            mergeMap((markId) =>
                this.markService.getMark(markId).pipe(
                    map(mark => MarkAction.getMarkSuccess({ mark })),
                    catchError((error: HttpErrorResponse) => of(MarkAction.getMarkFailure({ error:  error.error }))))
            ),
        );
    });


    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private markService: MarkService
    ) {

    }
}