import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { DTOWithTotal, SelectDTO } from "src/types/DTOs"
import { CarDTO } from "src/types/DTOs/CarDTOs/CarDTO"
import { CarFilteringModel } from "src/types/DTOs/CarDTOs/carFilteringModel"
import { CreateCarDTO } from "src/types/DTOs/CarDTOs/createCarDTO"
import { UpdateCarDTO } from "src/types/DTOs/CarDTOs/updateCarDTO"
import { ViewCarDTO } from "src/types/DTOs/CarDTOs/viewCarDTO"
import { BaseService } from "./index.services"

@Injectable({ providedIn: 'root' })
export class CarService extends BaseService {

    getCar(id: number): Observable<ViewCarDTO> {
        return this.httpClient.get<ViewCarDTO>(`${this.carApi}/${id}`)
    }

    getColors(): Observable<SelectDTO[]> {
        return this.httpClient.get<SelectDTO[]>(`${this.carApi}/colors`)
    }

    getEngineCapacities(): Observable<SelectDTO[]> {
        return this.httpClient.get<SelectDTO[]>(`${this.carApi}/engine`)
    }    

    getCarForSelect(): Observable<SelectDTO[]> {
        return this.httpClient.get<SelectDTO[]>(`${this.carApi}/forSelect`)
    }

    getCars(carFilter: CarFilteringModel): Observable<DTOWithTotal<CarDTO>> {
        const newCarFilter = {
            ...carFilter,
            priceDate: carFilter.priceDate.toDateString()
        }
        return this.httpClient.get<DTOWithTotal<CarDTO>>(this.carApi, {
            params: { ...newCarFilter }
        })
    }
    createCar(car: CreateCarDTO) {
        return this.httpClient.post(this.carApi, car)
    }

    updateCar(car: UpdateCarDTO) {
        return this.httpClient.put(`${this.carApi}/${car.id}`, car)
    }
    deleteCar(id: number) {
        return this.httpClient.delete(`${this.carApi}/${id}`)
    }

}