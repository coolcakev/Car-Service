import { createAction, props } from "@ngrx/store";
import { DTOWithTotal, SelectDTO } from "src/types/DTOs";
import { CarDTO } from "src/types/DTOs/CarDTOs/CarDTO";
import { CarFilteringModel } from "src/types/DTOs/CarDTOs/carFilteringModel";
import { CreateCarDTO } from "src/types/DTOs/CarDTOs/createCarDTO";
import { UpdateCarDTO } from "src/types/DTOs/CarDTOs/updateCarDTO";
import { ViewCarDTO } from "src/types/DTOs/CarDTOs/viewCarDTO";


export const resetCurrentCarViewDTO = createAction('[Car] Reset Current Car View DTO')
export const resetCarFilter = createAction('[Car] Reset Car Filter')
export const setCurrentCarDTO = createAction('[Car] Set Current Edit Car DTO', props<{ carDTO: CarDTO }>());
export const setCarFilteringModel = createAction('[Car] Set Car Filtering Model', props<{ carFiltering: Partial<CarFilteringModel> }>());
export const getDataForAllFilters = createAction('[Car] Get Data For All Filters')
export const setGridColomnCount = createAction('[Car] Set Grid Colomn Count', props<{ colomnCount: number,page:number }>())

export const getMaxPrice = createAction('[Car] Get Max Price')
export const getMaxPriceSuccess = createAction('[Car] Get Max Price Success', props<{ maxPrice: number }>());

export const getCarColors = createAction('[Car] Get Car Colors')
export const getCarColorsSuccess = createAction('[Car] Get Car Colors Success', props<{ colors: SelectDTO[] }>());

export const getCarEngine = createAction('[Car] Get Car Engine Capacity')
export const getCarEngineSuccess = createAction('[Car] Get Car Engine Capacity Success', props<{ engineCapacities: SelectDTO[] }>());

export const getCars = createAction('[Car] Get Cars');
export const getCarsSuccess = createAction('[Car] Get Cars Success', props<{ dtoWithTotal: DTOWithTotal<CarDTO> }>());
export const getCarsFailure = createAction('[Car] Get Cars Failure', props<{ error: string }>());

export const getCar = createAction('[Car] Get Car', props<{ id: number }>());
export const getCarSuccess = createAction('[Car] Get Car Success', props<{ car: ViewCarDTO }>());
export const getCarFailure = createAction('[Car] Get Car Failure', props<{ error: string }>());

export const createCar = createAction('[Car] Create Car', props<{ car: CreateCarDTO }>());
export const createCarSuccess = createAction('[Car] Create Car Success');
export const createCarFailure = createAction('[Car] Create Car Failure', props<{ error: string }>());

export const updateCar = createAction('[Car] Update Car', props<{ car: UpdateCarDTO }>());
export const updateCarSuccess = createAction('[Car] Update Car Success');
export const updateCarFailure = createAction('[Car] Update Car Failure', props<{ error: string }>());

export const deleteCar = createAction('[Car] Delete Car', props<{ id: number }>());
export const deleteCarSuccess = createAction('[Car] Delete Car Success');
export const deleteCarFailure = createAction('[Car] Delete Car Failure', props<{ error: string }>());