import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, switchMap, take } from "rxjs";
import { CarService } from "src/services/car.services";
import { PriceService } from "src/services/price.services";
import * as CarAction from "../actions/car.actions"
import { countRowInGrid } from "../reduers/car.reducers";
import * as CarSelection from "../selectors/car.selectors"
import { AppState } from "../types";

@Injectable()
export class CarEffects {

    setGridColomnCount$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.setGridColomnCount),
            map(({ colomnCount, page }) => CarAction.setCarFilteringModel({ carFiltering: { page, count: colomnCount * countRowInGrid } }))
        );
    });

    setCarFilteringModel$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.setCarFilteringModel),
            map(() => CarAction.getCars())
        );
    });

    getCars$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CarAction.getCars),
            mergeMap(() =>
                this.store.pipe(
                    select(CarSelection.selectCarFiltering),
                    take(1),
                    mergeMap(carFilter =>
                        this.carService.getCars(carFilter).pipe(
                            map(dtoWithTotal => CarAction.getCarsSuccess({ dtoWithTotal })),
                            catchError((error: HttpErrorResponse) =>
                                of(CarAction.getCarsFailure({ error: error.error }))
                            )
                        )
                    )
                )
            ),
        ));

    createCar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.createCar),
            map((car) => car.car),
            mergeMap((car) =>
                this.carService.createCar(car).pipe(
                    switchMap(() => of(
                        CarAction.createCarSuccess(),
                        CarAction.getCars(),
                        CarAction.getCarColors(),
                        CarAction.getCarEngine(),
                        CarAction.getMaxPrice(),

                    )),
                    catchError((error: HttpErrorResponse) => of(CarAction.createCarFailure({ error:  error.error }))))
            ),
        );
    });

    updateCar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.updateCar),
            map((car) => car.car),
            mergeMap((carEdited) =>
                this.store.pipe(
                    select(CarSelection.selectCurrentCar),
                    take(1),
                    map((car) => {
                        return {
                            ...carEdited,
                            id: car.id
                        }
                    }),
                    mergeMap((car) =>
                        this.carService.updateCar(car).pipe(
                            switchMap(() => of(
                                CarAction.updateCarSuccess(),
                                CarAction.getCars(),
                                CarAction.getCarColors(),
                                CarAction.getCarEngine(),
                                CarAction.getMaxPrice(),
                            )

                            ),
                            catchError((error: HttpErrorResponse) => of(CarAction.updateCarFailure({ error:  error.error }))))
                    ),
                )
            )
        );
    });

    deleteCar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.deleteCar),
            map((action) => action.id),
            mergeMap((carId) =>
                this.carService.deleteCar(carId).pipe(
                    switchMap(()=>of(
                        CarAction.deleteCarSuccess(),
                        CarAction.getCars()
                    )),                  
                    catchError((error: HttpErrorResponse) => of(CarAction.deleteCarFailure({ error:  error.error}))))
            ),
        );
    });

    getCar$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.getCar),
            map((action) => action.id),
            mergeMap((carId) =>
                this.carService.getCar(carId).pipe(
                    map(car => CarAction.getCarSuccess({ car })),
                    catchError((error: HttpErrorResponse) => of(CarAction.getCarFailure({ error:  error.error }))))
            ),
        );
    });

    getDataForAllFilters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.getDataForAllFilters),
            switchMap(() => of(
                CarAction.getCarColors(),
                CarAction.getCarEngine(),
                CarAction.getMaxPrice()
            )),
        );
    });

    getColors$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.getCarColors),
            mergeMap(() =>
                this.carService.getColors().pipe(
                    map(colors => CarAction.getCarColorsSuccess({ colors })),
                    catchError((error: HttpErrorResponse) => of(CarAction.getCarFailure({ error:  error.error }))))
            ),
        );
    });

    getEgineCapacities$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.getCarEngine),
            mergeMap(() =>
                this.carService.getEngineCapacities().pipe(
                    map(engineCapacities => CarAction.getCarEngineSuccess({ engineCapacities })),
                    catchError((error: HttpErrorResponse) => of(CarAction.getCarFailure({ error: error.error }))))
            ),
        );
    });

    getMaxPrice$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CarAction.getMaxPrice),
            mergeMap(() =>
                this.priceService.getMaxPrice().pipe(
                    map(maxPrice => CarAction.getMaxPriceSuccess({ maxPrice })),
                    catchError((error: HttpErrorResponse) => of(CarAction.getCarFailure({ error:  error.error }))))
            ),
        );
    });





    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private carService: CarService,
        private priceService: PriceService,
    ) {

    }
}