import { createReducer, on } from "@ngrx/store";
import * as CarAction from "../actions/car.actions";
export const carFeatureKey = "car";
const resetCarFilter = () => ({
    color: "",
    engine: "",
    endPrice: 0,
    markId: 0,
    modelId: 0,
    priceDate: new Date(),
    startPrice: 0,
    count: 5,
    name: "name",
    page: 1,
    searchTerm: "",
    sortOrder: "desc"
});
export const initialState = {
    loading: false,
    currentCar: null,
    currentViewCar: null,
    error: null,
    totalCars: 0,
    cars: [],
    carFiltering: resetCarFilter(),
    colors: [],
    engine: [],
    maxPrice: 0,
};
export const carReducer = createReducer(initialState, on(CarAction.resetCarFilter, (state) => ({ ...state, carFiltering: resetCarFilter() })), on(CarAction.setCurrentCarDTO, (state, action) => ({ ...state, currentCar: action.carDTO })), on(CarAction.setCarFilteringModel, (state, action) => ({ ...state, carFiltering: { ...state.carFiltering, ...action.carFiltering, } })), on(CarAction.getCars, state => ({ ...state, loading: true, error: null })), on(CarAction.getCarsSuccess, (state, action) => ({ ...state, loading: false, cars: action.dtoWithTotal.dtoObjects, totalCars: action.dtoWithTotal.total })), on(CarAction.getCarsFailure, (state, action) => ({ ...state, loading: false, error: action.error })), on(CarAction.getMaxPrice, state => ({ ...state, error: null })), on(CarAction.getMaxPriceSuccess, (state, action) => ({ ...state, maxPrice: action.maxPrice })), on(CarAction.getCarColors, state => ({ ...state, error: null })), on(CarAction.getCarColorsSuccess, (state, action) => ({ ...state, colors: action.colors })), on(CarAction.getCarEngine, state => ({ ...state, error: null })), on(CarAction.getCarEngineSuccess, (state, action) => ({ ...state, engine: action.engineCapacities })), on(CarAction.getCar, state => ({ ...state, error: null })), on(CarAction.getCarSuccess, (state, action) => ({ ...state, currentViewCar: action.car })), on(CarAction.getCarFailure, (state, action) => ({ ...state, error: action.error })), on(CarAction.createCar, state => ({ ...state, error: null })), on(CarAction.createCarSuccess, state => ({ ...state, error: null, currentCar: null })), on(CarAction.createCarFailure, (state, action) => ({ ...state, error: action.error })), on(CarAction.updateCar, state => ({ ...state, error: null })), on(CarAction.updateCarSuccess, state => ({ ...state, error: null, currentCar: null })), on(CarAction.updateCarFailure, (state, action) => ({ ...state, error: action.error })), on(CarAction.deleteCar, state => ({ ...state, error: null })), on(CarAction.deleteCarFailure, (state, action) => ({ ...state, error: action.error })));
//# sourceMappingURL=car.reducers.js.map