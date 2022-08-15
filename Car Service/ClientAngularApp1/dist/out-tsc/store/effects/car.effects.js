import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { select } from "@ngrx/store";
import { catchError, map, mergeMap, of, switchMap, take } from "rxjs";
import * as CarAction from "../actions/car.actions";
import * as CarSelection from "../selectors/car.selectors";
let CarEffects = class CarEffects {
    constructor(actions$, store, carService, priceService) {
        this.actions$ = actions$;
        this.store = store;
        this.carService = carService;
        this.priceService = priceService;
        this.setCarFilteringModel$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.setCarFilteringModel), map(() => CarAction.getCars()));
        });
        this.getCars$ = createEffect(() => this.actions$.pipe(ofType(CarAction.getCars), mergeMap(() => this.store.pipe(select(CarSelection.selectCarFiltering), take(1), mergeMap(carFilter => this.carService.getCars(carFilter).pipe(map(dtoWithTotal => CarAction.getCarsSuccess({ dtoWithTotal })), catchError((error) => of(CarAction.getCarsFailure({ error: error?.message })))))))));
        this.createCar$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.createCar), map((car) => car.car), mergeMap((car) => this.carService.createCar(car).pipe(switchMap(() => of(CarAction.createCarSuccess(), CarAction.getCars(), CarAction.getCarColors(), CarAction.getCarEngine(), CarAction.getMaxPrice())), catchError((error) => of(CarAction.createCarFailure({ error: error.message }))))));
        });
        this.updateCar$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.updateCar), map((car) => car.car), mergeMap((carEdited) => this.store.pipe(select(CarSelection.selectCurrentCar), take(1), map((car) => {
                return {
                    ...carEdited,
                    id: car.id
                };
            }), mergeMap((car) => this.carService.updateCar(car).pipe(map(cars => CarAction.updateCarSuccess()), map(cars => CarAction.getCars()), catchError((error) => of(CarAction.updateCarFailure({ error: error.message }))))))));
        });
        this.deleteCar$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.deleteCar), map((action) => action.id), mergeMap((carId) => this.carService.deleteCar(carId).pipe(map(cars => CarAction.deleteCarSuccess()), map(cars => CarAction.getCars()), catchError((error) => of(CarAction.deleteCarFailure({ error: error.message }))))));
        });
        this.getCar$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getCar), map((action) => action.id), mergeMap((carId) => this.carService.getCar(carId).pipe(map(car => CarAction.getCarSuccess({ car })), catchError((error) => of(CarAction.getCarFailure({ error: error.message }))))));
        });
        this.getDataForAllFilters$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getDataForAllFilters), switchMap(() => of(CarAction.getCarColors(), CarAction.getCarEngine(), CarAction.getMaxPrice())));
        });
        this.getColors$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getCarColors), mergeMap(() => this.carService.getColors().pipe(map(colors => CarAction.getCarColorsSuccess({ colors })), catchError((error) => of(CarAction.getCarFailure({ error: error.message }))))));
        });
        this.getEgineCapacities$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getCarEngine), mergeMap(() => this.carService.getEngineCapacities().pipe(map(engineCapacities => CarAction.getCarEngineSuccess({ engineCapacities })), catchError((error) => of(CarAction.getCarFailure({ error: error.message }))))));
        });
        this.getMaxPrice$ = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getMaxPrice), mergeMap(() => this.priceService.getMaxPrice().pipe(map(maxPrice => CarAction.getMaxPriceSuccess({ maxPrice })), catchError((error) => of(CarAction.getCarFailure({ error: error.message }))))));
        });
    }
};
CarEffects = __decorate([
    Injectable()
], CarEffects);
export { CarEffects };
//# sourceMappingURL=car.effects.js.map