import { createFeatureSelector, createSelector } from "@ngrx/store";
import { carFeatureKey } from "../reduers/car.reducers";
export const selectCarFeature = createFeatureSelector(carFeatureKey);
export const selectCarFiltering = createSelector(selectCarFeature, (state) => state.carFiltering);
export const selectCarPageSize = createSelector(selectCarFeature, (state) => state.carFiltering.count);
export const selectCarPage = createSelector(selectCarFeature, (state) => state.carFiltering.page);
export const selectLoading = createSelector(selectCarFeature, (state) => state.loading);
export const selectCurrentCar = createSelector(selectCarFeature, (state) => state.currentCar);
export const selectCurrentViewCar = createSelector(selectCarFeature, (state) => state.currentViewCar);
export const selectError = createSelector(selectCarFeature, (state) => state.error);
export const selectCars = createSelector(selectCarFeature, (state) => state.cars);
export const selectCarTotal = createSelector(selectCarFeature, (state) => state.totalCars);
export const selectColors = createSelector(selectCarFeature, (state) => state.colors);
export const selectEngine = createSelector(selectCarFeature, (state) => state.engine);
export const selectMaxPrice = createSelector(selectCarFeature, (state) => state.maxPrice + 1);
//# sourceMappingURL=car.selectors.js.map