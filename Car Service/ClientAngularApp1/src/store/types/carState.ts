import { HttError } from "src/error/resources/models/httError";
import { SelectDTO } from "src/types/DTOs";
import { CarDTO } from "src/types/DTOs/CarDTOs/CarDTO";
import { CarFilteringModel } from "src/types/DTOs/CarDTOs/carFilteringModel";
import { ViewCarDTO } from "src/types/DTOs/CarDTOs/viewCarDTO";

export interface CarState {
    loading: boolean;
    currentViewCar: ViewCarDTO;
    currentViewCarLoading: boolean;
    currentCar: CarDTO;
    carFiltering: CarFilteringModel;
    totalCars: number,
    cars: CarDTO[];
    error: HttError;
    colors:SelectDTO[],
    engine:SelectDTO[],
    maxPrice: number,
    colomnCount: number
}