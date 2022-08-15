import { createFeatureSelector, createSelector } from "@ngrx/store"
import { carFeatureKey, countRowInGrid } from "../reduers/car.reducers"
import { CarState } from "../types/CarState"

export const selectCarFeature=createFeatureSelector<CarState>(carFeatureKey)

export const selectCarFiltering=createSelector(
    selectCarFeature,
    (state:CarState) =>state.carFiltering
)

export const selectCarPageSize=createSelector(
    selectCarFeature,
    (state:CarState) =>state.carFiltering.count
)

export const selectCarPage=createSelector(
    selectCarFeature,
    (state:CarState) =>state.carFiltering.page
)

export const selectLoading=createSelector(
    selectCarFeature,
    (state:CarState) =>state.loading
)
export const selectCurrentCar=createSelector(
    selectCarFeature,
    (state:CarState) =>state.currentCar
)
export const selectCurrentViewCar=createSelector(
    selectCarFeature,
    (state:CarState) =>state.currentViewCar
)
export const selectError=createSelector(
    selectCarFeature,
    (state:CarState) =>state.error
)
export const selectCars=createSelector(
    selectCarFeature,
    (state:CarState) =>state.cars
)
export const selectCarTotal=createSelector(
    selectCarFeature,
    (state:CarState) =>state.totalCars
)
export const selectColors=createSelector(
    selectCarFeature,
    (state:CarState) =>state.colors
)
export const selectEngine=createSelector(
    selectCarFeature,
    (state:CarState) =>state.engine
)
export const selectMaxPrice=createSelector(
    selectCarFeature,
    (state:CarState) =>state.maxPrice+1
)
export const selectColomnCount=createSelector(
    selectCarFeature,
    (state:CarState) =>state.colomnCount
)
export const selectPageSize=createSelector(
    selectCarFeature,
    (state:CarState) =>state.colomnCount*countRowInGrid
)
export const selectCurrentCarLoading=createSelector(
    selectCarFeature,
    (state:CarState) =>state.currentViewCarLoading
)